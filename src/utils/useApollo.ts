/* eslint-disable no-console */
import { IncomingHttpHeaders } from 'http'

import { useMemo } from 'react'

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { onError } from '@apollo/link-error'
import { createUploadLink } from 'apollo-upload-client'
import merge from 'deepmerge'
import fetch from 'isomorphic-unfetch'
import isEqual from 'lodash/isEqual'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createApolloClient = (headers: IncomingHttpHeaders | null = null) => {
  const enhancedFetch = (url: RequestInfo, init: RequestInit) => {
    const oid = window.localStorage.getItem('oid')
    return fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        'Access-Control-Allow-Origin': '*',
        Cookie: headers?.cookie ?? '',
        Authorization: oid ? `bearer ${oid}` : ''
      }
    }).then((response) => response)
  }

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          )
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          )
      }),
      createUploadLink({
        uri: 'http://localhost:4000/graphql',
        fetchOptions: {
          mode: 'cors'
        },
        credentials: 'include',
        fetch: enhancedFetch
      })
    ]),
    cache: new InMemoryCache()
  })
}

type InitialState = NormalizedCacheObject | undefined

interface IInitializeApollo {
  headers?: IncomingHttpHeaders | null
  initialState?: InitialState | null
}
export const initializeApollo = (
  { headers, initialState }: IInitializeApollo = {
    headers: null,
    initialState: null
  }
) => {
  const initialApolloClient = apolloClient ?? createApolloClient(headers)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = initialApolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        )
      ]
    })

    // Restore the cache with the merged data
    initialApolloClient.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return initialApolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = initialApolloClient

  return initialApolloClient
}

export function useApollo() {
  const store = useMemo(() => initializeApollo(), [])
  return store
}

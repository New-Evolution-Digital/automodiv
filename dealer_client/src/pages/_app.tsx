import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'

import '../styles/main.css'
import { useApollo } from '../utils/useApollo'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps)
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp

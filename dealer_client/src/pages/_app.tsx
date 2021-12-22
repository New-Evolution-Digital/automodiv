import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '../styles/main.css'
import { useApollo } from '../utils/useApollo'
import { store } from 'reducers'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps)
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp

import React, { FC } from 'react'

import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LandingPage } from 'components/LandingPage'
import { store } from 'state'
import { useApollo } from 'utils/useApollo'

export const App: FC = () => {
  const client = useApollo()

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  )
}

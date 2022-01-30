import React, { FC } from 'react'

import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DealerRoutes } from 'javascript/Dealer/DealerRoutes'
import { Root } from 'javascript/Root'
import { store } from 'state'
import { useApollo } from 'utils/useApollo'

export const App: FC = () => {
  const client = useApollo()

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Routes>
            <Route path="/dealer/*" element={<DealerRoutes />} />
            <Route path="/" element={<Root />} />
            <Route
              path="*"
              element={
                <main>
                  <p>There is nothing here</p>
                </main>
              }
            />
          </Routes>
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  )
}

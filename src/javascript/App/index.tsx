import React, { FC } from 'react'

import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DealerRoutes } from 'javascript/Dealer/DealerRoutes'
import { Root } from 'javascript/Root'
import ShopperRoutes from 'javascript/Shopper/ShopperRoutes'
import { useApollo } from 'utils/useApollo'

export const App: FC = () => {
  const client = useApollo()

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/dealer/*" element={<DealerRoutes />} />
          <Route path="/shopper/*" element={<ShopperRoutes />} />
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
      </ApolloProvider>
    </BrowserRouter>
  )
}

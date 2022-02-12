import { Route, Routes } from 'react-router-dom'

import ShopperLanding from './Public/ShopperLanding'

const ShopperRoutes = () => {
  return (
    <Routes>
      <Route index element={<ShopperLanding />} />
    </Routes>
  )
}

export default ShopperRoutes

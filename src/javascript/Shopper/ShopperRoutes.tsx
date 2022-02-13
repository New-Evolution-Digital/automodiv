import { Route, Routes } from 'react-router-dom'

import ShopperLanding from './Public/ShopperLanding'
import ShopLayout from './ShopLayout'

const ShopperRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route index element={<ShopperLanding />} />
      </Route>
    </Routes>
  )
}

export default ShopperRoutes

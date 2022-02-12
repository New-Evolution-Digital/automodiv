import { FC } from 'react'

import ShopNav from '../ShopNav'

const ShopperLanding: FC = () => {
  return (
    <main>
      <ShopNav />
      <div className="flex flex-grow h-screen justify-center">
        <h1 className="h-80 p-10 center text-xl font-semibold">
          Automodiv - Shopping Page
        </h1>
      </div>
    </main>
  )
}

export default ShopperLanding

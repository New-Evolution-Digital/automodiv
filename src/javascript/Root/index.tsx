import { FC } from 'react'

import { NavLink } from 'react-router-dom'

import { RootPageViews } from './models'
import pageStyle from './page.module.scss'

export const Root: FC = () => (
  <div className={pageStyle.rootView}>
    <div className={pageStyle.pageNav}>
      <h1 className={pageStyle.navBrand}>Automodiv</h1>
      <div>
        <NavLink
          className="m-1 p-2 border-2 border-gray-400 rounded"
          to={RootPageViews.SHOPPER}
          onClickCapture={() =>
            window.localStorage.setItem('window_type', RootPageViews.SHOPPER)
          }
        >
          For Shoppers
        </NavLink>
        <NavLink
          className="m-1 "
          to={RootPageViews.DEALER}
          onClickCapture={() =>
            window.localStorage.setItem('window_type', RootPageViews.DEALER)
          }
        >
          For Dealers
        </NavLink>
      </div>
    </div>
    <main className={pageStyle.mainContainer}>
      <div className={pageStyle.Hero}>
        <h2 className={pageStyle.heroTitle}>Like Buying a Car from a Friend</h2>
        <p className={pageStyle.heroSubtitle}>
          Feeling swindled never feels good when you buy a car. Let other
          peoples experiences help you find the right dealership to buy your
          dream car from.
        </p>
        <div className={pageStyle.btnGroup}>
          <button className="btn bg-blue-700 text-gray-50">
            Shop Inventory
          </button>
          <button className="btn text-blue-700">Get Involved</button>
        </div>
      </div>
    </main>
  </div>
)

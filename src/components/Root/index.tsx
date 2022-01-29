import { FC } from 'react'

import { NavLink } from 'react-router-dom'

import pageStyle from './page.module.scss'

export const Root: FC = () => (
  <div className={pageStyle.rootView}>
    <div className={pageStyle.pageNav}>
      <h1>Automodiv</h1>
      <NavLink to="/dealers">For Dealers</NavLink>
    </div>
    <div />
  </div>
)

import { Outlet } from 'react-router'

import { Sidebar } from '@layout/Sidebar'
import './style.scss'

export const Layout = () => {
  return (
    <div className="container">
      <div className="layout">
        <Sidebar />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

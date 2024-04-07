import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import './styles.scss'

export const BREAKPOINTS_MAP = {
  mobile: { minWidth: 480 },
  mobileLandscape: { minWidth: 640 },
  tablet: { minWidth: 768 },
  tabletLandscape: { minWidth: 1024 },
  laptop: { minWidth: 1280 },
  laptopL: { minWidth: 1536 },
  laptopLg: { minWidth: 1640 },
  laptopXlg: { minWidth: 1920 },
}

const sidebarData = [
  {
    title: 'Margarita',
    path: '/margarita',
  },
  {
    title: 'Mojito',
    path: '/mojito',
  },
  {
    title: 'A1',
    path: '/a1',
  },
  {
    title: 'Kir',
    path: '/kir',
  },
]

export const Sidebar = () => {
  const isTableMedia = useMediaQuery(BREAKPOINTS_MAP.tablet)

  const [sidebar, setSidebar] = useState<boolean>(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      {!isTableMedia && (
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className="sidebar">
            <button className="menu-bars-open-btn">
              <span className="sr-only">Open sidebar</span>
              <FaBars onClick={showSidebar} />
            </button>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <button className="menu-bars-close-btn">
                    <span className="sr-only">Close sidebar</span>
                    <AiOutlineClose />
                  </button>
                </li>
                {sidebarData.map((item, index) => {
                  const { title, path } = item
                  return (
                    <li key={index} className="nav-item">
                      <NavLink end to={path}>
                        <span>{title}</span>
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </IconContext.Provider>
      )}

      {isTableMedia && (
        <nav className="sidebar-desktop">
          <ul className="nav-menu-items-desktop">
            {sidebarData.map((item, index) => {
              const { title, path } = item
              return (
                <li key={index} className="nav-item">
                  <NavLink end to={path}>
                    <span>{title}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </>
  )
}

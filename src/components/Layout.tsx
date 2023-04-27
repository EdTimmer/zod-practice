import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutContainer } from './Layout.css'

const Layout = () => {
  const location = useLocation()
  console.log('location.pathname', location.pathname)
  const link = location.pathname === '/' ? '/forms' : '/'
  return (
    <LayoutContainer>
      <Outlet />
      <nav>
        <ul>
          <li>
            <Link to={link}>Hop!</Link>
          </li>
        </ul>
      </nav>
    </LayoutContainer>
  )
}

export default Layout

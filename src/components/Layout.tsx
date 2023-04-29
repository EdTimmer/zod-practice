import { Outlet, Link, useLocation } from 'react-router-dom'
import {
  LayoutContainer,
  Header,
  Footer,
  OutletContainer,
  Logo,
  Nav,
  NavLink,
} from './Layout.css'

const Layout = () => {
  const location = useLocation()
  console.log('location.pathname', location.pathname)
  // const link = location.pathname === '/' ? '/forms' : '/'
  const pathname = location.pathname;
  return (
    <LayoutContainer>
      <Header>
        <Logo>Zod Practice</Logo>
        <Nav>
          <NavLink isCurrentPage={pathname === '/'} to="/">
            Form
          </NavLink>
          <NavLink isCurrentPage={pathname === '/api'} to="/api">
            API Call
          </NavLink>
        </Nav>
      </Header>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout

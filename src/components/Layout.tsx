import { Outlet, useLocation } from 'react-router-dom'
import {
  LayoutContainer,
  Header,
  Footer,
  OutletContainer,
  Logo,
  NavContainer,
  NavLink,
  LinkContainer,
} from './Layout.css'

const Layout = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <LayoutContainer>
      <Header>
        <Logo>Zod Practice</Logo>
        <NavContainer>
          <LinkContainer isCurrentPage={pathname === '/'}>
            <NavLink isCurrentPage={pathname === '/'} to="/">
              Form
            </NavLink>
          </LinkContainer>
          <LinkContainer isCurrentPage={pathname === '/api'}>
            <NavLink isCurrentPage={pathname === '/api'} to="/api">
              API Call
            </NavLink>
          </LinkContainer>
        </NavContainer>
      </Header>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout

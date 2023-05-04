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
          <LinkContainer $isCurrent={pathname === '/'}>
            <NavLink $isCurrent={pathname === '/'} to="/">
              Form
            </NavLink>
          </LinkContainer>
          <LinkContainer $isCurrent={pathname === '/api'}>
            <NavLink $isCurrent={pathname === '/api'} to="/api">
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

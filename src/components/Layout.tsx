import { Outlet, useLocation } from 'react-router-dom'
import {
  LayoutContainer,
  Header,
  Footer,
  OutletContainer,
  Logo,
  NavContainer,
  NavLink,
} from './Layout.css'


const Layout = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <LayoutContainer>
      <Header>
        <Logo>Zod Practice</Logo>
        <NavContainer>
            <NavLink $isCurrent={pathname === '/'} to="/">
              Home
            </NavLink>
            <NavLink $isCurrent={pathname === '/form'} to="/form">
              Form
            </NavLink>
            <NavLink $isCurrent={pathname === '/api'} to="/api">
              API Call
            </NavLink>
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

import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Colors } from '../styles/colors'

export const LayoutContainer = styled.div`
  height: 100%;
  width: 100vw;
`
export const Header = styled.div`
  height: 10rem;
  width: 100%;
  background: ${Colors.orange};
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Footer = styled.div`
  height: 10rem;
  width: 100%;
  background: ${Colors.gray};
`

export const OutletContainer = styled.div`
  display: flex;
  height: Calc(100vh - 20rem);
`

export const Logo = styled.h1`
  color: ${Colors.white};
  margin-left: 2rem;
`

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const NavLink = styled(Link)<{ isCurrentPage: boolean }>`
  color: ${Colors.white};
  color: ${({ isCurrentPage }) => isCurrentPage ? Colors.gray : Colors.white};
  font-size: 2rem;
  text-decoration: none;
  cursor: ${({ isCurrentPage }) => isCurrentPage ? 'default' : 'pointer'};
  
  &:hover {
    /* color: ${Colors.beige}; */
    color: ${({ isCurrentPage }) => isCurrentPage ? Colors.gray : Colors.beige};
  }
  &:active {
      color: ${({ isCurrentPage }) => isCurrentPage ? Colors.gray : Colors.black};
  };
`
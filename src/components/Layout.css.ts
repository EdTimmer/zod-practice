import styled from 'styled-components'
import { lighten } from 'polished'
import { Link } from "react-router-dom";

import { Colors } from '../styles/colors'

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  height: 10rem;
  width: 100%;
  background: ${Colors.orange};
  box-shadow: 0 3px 3px ${Colors.gray};
  padding: 2rem 0;
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
  height: 100%;
`

export const Logo = styled.h1`
  color: ${Colors.white};
  margin-left: 5rem;
`

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-right: 5rem;
`

export const LinkContainer = styled.div<{ $isCurrent: boolean }>`
  border: none;
  padding: 0.5rem 1rem;
  border-top: 1px solid ${Colors.orange};
  border-right: 1px solid ${Colors.orange}; 
  border-left: 1px solid ${Colors.orange}; 
  border-bottom: ${({ $isCurrent }) => $isCurrent ? `1px solid ${Colors.white}` : `1px solid ${Colors.orange}`};
  border-radius: 3px;
  transition: all .2s;

  &:hover {
    border-top: ${({ $isCurrent }) => $isCurrent ? `1px solid ${Colors.orange}` : `1px solid ${Colors.white}`};
    border-right: ${({ $isCurrent }) => $isCurrent ? `1px solid ${Colors.orange}` : `1px solid ${Colors.white}`};
    border-bottom: ${({ $isCurrent }) => $isCurrent ? `1px solid ${Colors.white}` : `1px solid ${Colors.white}`};
    border-left: ${({ $isCurrent }) => $isCurrent ? `1px solid ${Colors.orange}` : `1px solid ${Colors.white}`};
  }
  &:active {
      transform: ${({ $isCurrent }) => $isCurrent ? 'none' : `translateY(.2rem)`};
      background: ${({ $isCurrent }) => $isCurrent ? 'none' : `${lighten(0.07, `${Colors.orange}`)}`}; ;
  };
`

export const NavLink = styled(Link) <{ $isCurrent: boolean }>`
  color: ${Colors.white};
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  cursor: ${({ $isCurrent }) => $isCurrent ? 'default' : 'pointer'};
`
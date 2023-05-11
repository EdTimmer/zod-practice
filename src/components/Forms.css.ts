import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { Colors } from '../styles/colors'
import { ReactComponent as CheckIcon } from "../assets/checkmark.svg";

const svg = css`
  position: absolute;
  fill: none;
`;

export const FormPage = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

export const FormsContainer = styled.div`
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  background: #FFFFFF;
  min-width: 40rem;
  padding: 3rem;
  margin: 5rem;
  border-radius: 5px;
  border: 2px solid ${Colors.gray};
  box-shadow: 2px 3px 5px ${Colors.gray};
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5rem;
`

export const StyledInput = styled.input`
  border-radius: 5px;
  border: 0.5px solid ${Colors.gray};
  background: #F9FBFC;
  height: 4rem;
  margin-top: 1rem;
  padding: 1rem;
`

export const CheckboxInput = styled.input`
  width: 2rem;
  height: 2rem;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  border: 1px solid ${Colors.gray};
  border-radius: 3px;
`

export const Checkmark = styled(CheckIcon)`
  ${svg}
  width: 1.6rem;
  height: 1.6rem;
  pointer-events: none;
`;

export const AcceptRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  background: ${Colors.green};
  color: white;
  padding: 1rem;
  width: 100%;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 2px 3px 5px ${Colors.gray};
  transition: all .2s;
  
  &:hover {
    background: ${darken(0.07, `${Colors.green}`)};
  }
  &:active {
    color: ${Colors.black};
    transform: translateY(.2rem);
    box-shadow: none;
  }
`

export const CheckboxContainer = styled.div`
  display: grid;
  place-items: center;
  margin-right: 1rem;
`

export const ErrorSpan = styled.span`
  color: red;
  height: 1.8rem;
  margin-top: 0.2rem;
  font-size: 1.6rem;
`

export const Blank = styled.div`
  height: 1.8rem;
  margin-top: 0.2rem;
`

export const Header = styled.div`
  margin: 1rem 0 3rem 0;
`

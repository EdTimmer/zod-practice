import styled from 'styled-components'

export const Card = styled.div`
  background: #EEE9Da;
  width: 40rem;
  padding: 3rem;
  margin: 5rem;
  border-radius: 5px;
  border: 0.5px solid black;
  box-shadow: 2px 3px 5px black;
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5rem;
`
export const StyledInput = styled.input`
  border-radius: 5px;
  border: 0.5px solid black;
  background: #F9FBFC;
  height: 4rem;
  margin-top: 1rem;
  padding: 1rem;
`

export const CheckboxInput = styled.input`
  width: 2rem;
  height: 2rem;
`

export const AcceptRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  background: #6096B4;
  color: white;
  padding: 1rem;
  width: 100%;
  font-size: 2rem;
  cursor: pointer;
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

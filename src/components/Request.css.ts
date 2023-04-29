import styled from 'styled-components'
import { Colors } from '../styles/colors'

export const RequestContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: grid;
  place-items: center;
`

export const ResultsCard = styled.div`
  /* background: #EEE9Da; */
  background: #FFFFFF;
  width: 100%;
  height: 70%;
  padding: 3rem;
  margin: 5rem;
  border-radius: 5px;
  border: 0.5px solid ${Colors.gray};
  box-shadow: 2px 3px 5px ${Colors.gray};
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 5rem;
`

export const Button = styled.button<{ isResetButton?: boolean }>`
  border-radius: 5px;
  border: none;
  background: #6096B4;
  background: ${({ isResetButton }) => isResetButton ? "#FFB4B4" : "#6096B4"};
  color: ${({ isResetButton }) => isResetButton ? "black" : "white"};
  padding: 1rem;
  width: 30rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`

export const TopLeftSection = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const TopRightSection = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
   width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const BottomLeftSection = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

export const BottomRightSection = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
   width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`


export const Image = styled.img`
  max-width: 100%;
  max-height: 60rem;
  height: auto;
  padding: 2rem;
`

export const ErrorMessage = styled.p`
  color: red;
`

export const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

export const InfoCard = styled.div`
  /* border: 2px solid #BDCDD6; */
  border-radius: 5px;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin: 1rem;
`

export const LabelHeader = styled.h3`
  margin-bottom: 1rem;
`

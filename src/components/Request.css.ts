import styled from 'styled-components'

export const ResultsCard = styled.div`
  background: #EEE9Da;
  width: 100%;
  height: 100%;
  padding: 3rem;
  margin: 5rem;
  border-radius: 5px;
  border: 0.5px solid black;
  box-shadow: 2px 3px 5px black;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const RequestButton = styled.button<{ isResetButton?: boolean }>`
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

export const ResultsContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 2rem;
  display: grid;
  place-items: center;
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 72rem;
  height: auto;
  padding: 2rem;
`

export const DataContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`
export const ErrorMessage = styled.p`
  color: red;
`

export const PlaceholderContainer = styled.div`
  display: grid;
  place-items: center;
`
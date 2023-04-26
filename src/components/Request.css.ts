import styled from 'styled-components'

export const ResultsCard = styled.div`
  background: #EEE9Da;
  width: 80rem;
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
  /* margin: 1.5rem; */
`

export const ResultsContainer = styled.div`
  width: 60rem;
  height: 40rem;
  margin: 2rem;
  display: grid;
  place-items: center;
  position: relative;
`

export const Image = styled.img<{ isShowImage: boolean }>`
  max-width: 100%;
  height: auto;
  opacity: ${({ isShowImage }) => isShowImage ? 1 : 0};
  visibility: ${({ isShowImage }) => isShowImage ? 'visible' : 'hidden'};
  transition: display 0s, opacity 1s linear;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  padding: 2rem;
`

export const DataContainer = styled.div<{ isShowImage: boolean }>`
  width: 100%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  opacity: ${({ isShowImage }) => isShowImage ? 0 : 1};
  visibility: ${({ isShowImage }) => isShowImage ? 'hidden' : 'visible'};
  transition: display 0s, opacity 1s linear;
`
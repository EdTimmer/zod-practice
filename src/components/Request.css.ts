import styled from 'styled-components'
import { darken } from 'polished'

import { Colors } from '../styles/colors'

export const RequestContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

export const ResultsCard = styled.div`
  background: ${Colors.white};
  width: 100rem;
  padding: 3rem;
  border-radius: 5px;
  border: 2px solid ${Colors.gray};
  box-shadow: 2px 3px 5px ${Colors.gray};
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 5rem;
`

export const SubmitButton = styled.button`
  border-radius: 5px;
  border: none;
  background: ${Colors.green};
  color: ${Colors.white};
  padding: 1rem;
  width: 30rem;
  font-size: 2rem;
  font-weight: bold;
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

export const ResetButton = styled.button`
  border-radius: 5px;
  border: none;
  background: ${Colors.red};
  color: ${Colors.white};
  padding: 1rem;
  width: 30rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 3px 5px ${Colors.gray};
  transition: all .2s;
  
  &:hover {
    background: ${darken(0.07, `${Colors.red}`)};
  }
  &:active {
    color: ${Colors.black};
    transform: translateY(.2rem);
    box-shadow: none;
  }
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

export const ErrorContainer = styled.div`
  padding: 1rem 1rem 0 1rem;
  border: 1px solid ${Colors.gray};
  border-radius: 5px;
`

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
`

export const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`

export const InfoCard = styled.div`
  font-size: 2rem;
  padding: 1rem 2rem;
  margin: 1rem;
`
export const InfoNumber = styled.div`
  font-size: 2rem;
  padding: 1rem 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ParagraphHeader = styled.h3`
  margin-bottom: 1rem;
  padding: 0;
`
export const NumberHeader = styled.h3`
  margin-right: 1rem;
  padding: 0;
`
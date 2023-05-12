import styled, { keyframes, css } from "styled-components"
import { Colors } from "../styles/colors"
import { darken } from "polished";

const flicker = keyframes`
  0% {opacity:0;}
  9% {opacity:0;}
  10% {opacity:.5;}
  13% {opacity:0;}
  20% {opacity:.5;}
  25% {opacity:0;}
  30% {opacity:0;}
  35% {opacity:0;}
  49% {opacity:0;}
  50% {opacity:.5;}
  53% {opacity:0;}
  75% {opacity:0;}
`;

const moveLeftAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-40px);
  }
`;

export const AnimatedDiv = styled.div<{ shouldAnimate: boolean }>`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  animation: ${({ shouldAnimate: animate }) => animate ? css`${moveLeftAnimation} 1s linear forwards` : 'none'};
`;

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: ${Colors.white};
`;

export const CenterContainer = styled.div`  
  display: flex;
  flex-direction: column;   
  align-items: center;
  justify-content: center;
  padding: 5rem 20rem;
  background: ${Colors.black2};
  border-radius: 3rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 1rem; 
`;

export const ZodImage = styled.img`
  width: 12rem;
  height: 12rem;
  margin: 1rem; 
`;

export const TitleContainer = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
`

export const TitleFlickerLetter = styled.h1`
  font-size: 16rem;
  font-weight: 900;
  color: ${Colors.red};
  letter-spacing: 0;
  animation: ${flicker} 3s infinite;
`

export const TitleLetter = styled.h1`
  font-size: 16rem;
  font-weight: 900;
  color: ${Colors.red};
  letter-spacing: 0;
`

export const TitleHiddenLetter = styled.h1`
  font-size: 16rem;
  font-weight: 900;
  color: ${Colors.black2};
  letter-spacing: 0;
`

export const TitleSecondary = styled.h1`
  font-size: 16rem;
  font-weight: 200;
  color: ${Colors.white};
`

export const PresentationTitle = styled.h1`
  font-size: 8rem;
  font-weight: 600;
  margin: 0 5rem 1rem 5rem;
  color: ${Colors.blue};
`

export const ToolsDescription = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: ${Colors.white};
  text-align: center;
`

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  background: ${Colors.green};
  color: white;
  padding: 1rem;
  margin-top: 2rem;
  width: 20rem;
  font-size: 2rem;
  cursor: pointer;
  transition: all .2s;
  
  &:hover {
    background: ${darken(0.07, `${Colors.green}`)};
  }
  &:active {
    color: ${Colors.black};
    transform: translateY(.2rem);
  }
`
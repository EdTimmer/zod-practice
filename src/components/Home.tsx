import { z } from 'zod'
import { useState } from 'react'



import {
  HomeContainer,
  IconsContainer,
  IconImage,
  ZodImage,
  TitleContainer,
  TitleFlickerLetter,
  TitleShakingLetter,
  TitleLetter,
  TitleSecondary,
  PresentationTitle,
  ToolsDescription,
  CenterContainer,
  Button,
  TitleHiddenLetter,
  TitleFadingLetter,
  AnimatedDiv,
} from './Home.css'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import zodLogo from '../assets/zod_logo.svg'
import Blank from './Blank'

const Home = () => {
  const [count, setCount] = useState(0)

  const ComponentA = () => <TitleLetter>T</TitleLetter>
  const ComponentB = () => <TitleFlickerLetter>T</TitleFlickerLetter>
  const ComponentC = () => <TitleShakingLetter>T</TitleShakingLetter>
  const ComponentD = () => <TitleFadingLetter>T</TitleFadingLetter>
  const ComponentE = () => (
    <TitleHiddenLetter isVisible={count === 4}>T</TitleHiddenLetter>
  )

  const renderComponentByCount = (count: number) => {
    switch (count) {
      case 0:
        return <ComponentA />
      case 1:
        return <ComponentB />
      case 2:
        return <ComponentC />
      case 3:
        return <ComponentD />
      default:
        return null
    }
  }

  const handleButtonClick = () => {
    if (count < 3) {
      setCount(count + 1)
    } else {
      return
    }
  }
  

  return (
    <HomeContainer>
      <Blank />
      <CenterContainer>
        <TitleContainer>
          {renderComponentByCount(count)}
          <AnimatedDiv shouldAnimate={count === 3}>
            <TitleLetter>E</TitleLetter>
            <TitleLetter>D</TitleLetter>
            <TitleSecondary>Talks</TitleSecondary>
          </AnimatedDiv>
        </TitleContainer>
        <PresentationTitle>Introduction to Zod</PresentationTitle>
        <IconsContainer>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <IconImage src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <IconImage
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
          <a href="https://zod.dev" target="_blank" rel="noreferrer">
            <ZodImage src={zodLogo} className="logo zod" alt="Zod logo" />
          </a>
        </IconsContainer>
        <ToolsDescription>Vite + React + Zod</ToolsDescription>
        <Button onClick={handleButtonClick}>START</Button>
      </CenterContainer>
    </HomeContainer>
  )
}

export default Home

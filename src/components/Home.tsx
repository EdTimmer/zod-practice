import { z } from 'zod'

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
import { useState } from 'react'


/* SIMULATING TYPE CHECKING AT RUNTIME */

interface Square {
  kind: string
  width: number
}

interface Rectangle {
  kind: string
  width: number
  height: number
}

const mySquare: Square = { kind: 'square', width: 5 }
const myRectangle: Rectangle = { kind: 'rectangle', width: 10, height: 7 }

/* BY PROPERTY CHECK */

const calculateArea_PropertyCheck = (shape: Square | Rectangle) => {
  if ('height' in shape) {
    console.log(shape.width * (shape as Rectangle).height)
  } else {
    console.log(shape.width * shape.width)
  }
}

// calculateArea_PropertyCheck(myRectangle)

/* BY TAGGED / DISCRIMINATED UNION */

const calculateArea_TaggedUnion = (shape: Square | Rectangle) => {
  if (shape.kind === 'rectangle') {
    console.log(shape.width * (shape as Rectangle).height)
  } else {
    console.log(shape.width * shape.width)
  }
}

// calculateArea_TaggedUnion(myRectangle)

/* WITH TYPE GUARD */

function isRectangle(shape: Square | Rectangle): shape is Rectangle {
  return (shape as Rectangle).height !== undefined
}

const calculateArea_TypeGuard = (shape: Square | Rectangle) => {
  if (isRectangle(shape)) {
    console.log(shape.width * (shape as Rectangle).height)
  } else {
    console.log(shape.width * shape.width)
  }
}

// calculateArea_TypeGuard(myRectangle)

/* WITH ZOD */

const SquareSchema = z.object({
  width: z.number(),
  height: z.undefined(),
  // height: z.never(),
})

const RectangleSchema = z.object({
  width: z.number(),
  height: z.number(),
})

const calculateArea_WithZod = (shape: Square | Rectangle) => {
  const parsedSquare = SquareSchema.safeParse(shape)
  if (parsedSquare.success) {
    console.log(shape.width * shape.width)
  } else {
    console.log(shape.width * (shape as Rectangle).height)
  }
  // try {
  //   const parsedSquare = SquareSchema.parse(shape)
  //   console.log(shape.width * shape.width)
  // } catch (error) {
  //   console.log('error', error)
  //   console.log(shape.width * (shape as Rectangle).height)
  // }
}

// calculateArea_WithZod(myRectangle)


const ComponentA = () => <TitleFlickerLetter>T</TitleFlickerLetter>
const ComponentB = () => <TitleShakingLetter>T</TitleShakingLetter>
const ComponentC = () => <TitleFadingLetter>T</TitleFadingLetter>
const ComponentD = () => <TitleHiddenLetter>T</TitleHiddenLetter>

const ComponentE = () => <TitleLetter>T</TitleLetter>

const renderComponentByCount = (count: number) => {
  switch (count) {
    case 1:
      return <ComponentA />
    case 2:
      return <ComponentB />
    case 3:
      return <ComponentC />
    case 4:
      return <ComponentD />
    default:
      return <ComponentE />
  }
}

const Home = () => {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    if (count < 4) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
  }

  return (
    <HomeContainer>
      <CenterContainer>
        <TitleContainer>
          {renderComponentByCount(count)}
          {/* {count === 0 ? (
            <TitleLetter>T</TitleLetter>
          ) : count === 1 ? (
            <TitleShakingLetter>T</TitleShakingLetter>
          ) : <TitleHiddenLetter>T</TitleHiddenLetter>} */}
          <AnimatedDiv shouldAnimate={count === 4}>
            <TitleLetter>E</TitleLetter>
            <TitleLetter>D</TitleLetter>
            <TitleSecondary>Talks</TitleSecondary>
          </AnimatedDiv>
        </TitleContainer>
        <PresentationTitle>Zod Introduction</PresentationTitle>
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

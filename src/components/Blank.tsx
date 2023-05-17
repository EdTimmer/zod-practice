import { z } from 'zod'

const AddressSchema = z.object({
  street: z.string(),
  town: z.string().min(2),
  zip: z.string().length(5, { message: 'Zip Code must have 5 characters' }),
})

const PetsSchema = z.array(z.string())

const BurgerOfTheDayEnum = z.enum([
  'GourdonHamsey',
  'TheSilentilNight',
  'PoutineOnTheRitz',
])

const PersonSchema = z.object({
  name: z.string(),
  birthday: z.date().optional(),
  email: z.string().email(),
  numberOfChildren: z.union([z.string(), z.number()]),
  address: AddressSchema,
  pets: PetsSchema,
  burgerOfTheDay: BurgerOfTheDayEnum,
})

type PersonType = z.infer<typeof PersonSchema>
type AddressType = z.infer<typeof AddressSchema>
type PetNamesType = z.infer<typeof PetsSchema>
type BurgerType = z.infer<typeof BurgerOfTheDayEnum>

const LindasAddress: AddressType = {
  street: '123 Ocean Avenue',
  town: "Seymour's Bay",
  zip: '12345',
}

const LindasRaccoons: PetNamesType = [
  'Little King Trashmouth',
  'El Diablo',
  'Big Baby Pudding Snatcher',
  'Gary',
]

const Linda: PersonType = {
  name: 'Linda Belcher',
  birthday: new Date("06/03/1968"),
  numberOfChildren: '3',
  email: 'l.burger@gmail.com',
  address: LindasAddress,
  pets: LindasRaccoons,
  burgerOfTheDay: 'GourdonHamsey',
}

const GaylesCats: PetNamesType = ["Jean Paw'd Van Damme", 'Pinkeye', 'Mr. Business']


const parsedPerson = PersonSchema.parse(Linda)
console.log('parsedPerson', parsedPerson)

// const safeParsedPerson = PersonSchema.safeParse(Linda)
// console.log('safeParsedPerson', safeParsedPerson)

// if (!safeParsedPerson.success) {
//   const formatted = safeParsedPerson.error.format()
//   console.log('formatted', formatted)
// }


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
    console.log(shape.width * shape.height)
  } else {
    console.log(shape.width * shape.width)
  }
}

// calculateArea_TypeGuard(myRectangle)

/* WITH ZOD */

const SquareSchema = z.object({
  width: z.number(),
  height: z.undefined(),
  score: z.string(),
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
}

// calculateArea_WithZod(mySquare)

const Blank = () => {
  return <span />
}

export default Blank

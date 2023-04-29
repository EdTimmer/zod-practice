import { useState } from 'react'
import { ZodIssue, z } from 'zod'
import { ValidationError, fromZodError } from 'zod-validation-error'

import {
  RequestContainer,
  ResultsCard,
  TopLeftSection,
  TopRightSection,
  BottomLeftSection,
  BottomRightSection,
  Button,
  Image,
  ErrorMessage,
  PlaceholderContainer,
  InfoCard,
  LabelHeader,
} from './Request.css'
import errorImage from '../assets/cat-error.png'
import resetImage from '../assets/such-empty.png'

const CatSchema = z.array(
  z.object({
    // score: z.number(),
    url: z.string().url(),
    breeds: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        temperament: z.string(),
      }),
    ),
  }),
)

type CatType = z.infer<typeof CatSchema>

const Request = () => {
  const [parsedData, setParsedData] = useState<CatType>()
  const [isSuccess, setIsSuccess] = useState<boolean>()
  const [catUrl, setCatUrl] = useState<string>()
  const [errors, setErrors] = useState<string>()

  const apiKey =
    'live_SDlCPG7Qb9dLy1ZgZo2jNek2fdwN2ZJ1uOQvwSEygdEsT7xTOYUOjJMnIczWO71E'

  const fetchCat = async () => {
    const data = await fetch(
      `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${apiKey}`,
    ).then((res) => res.json())

    console.log('raw data', data)

    const parsed = CatSchema.safeParse(data)
    console.log('parsed data', parsed)
    // Handle Success
    if (parsed.success) {
      setIsSuccess(true)
      setErrors(undefined)
      setCatUrl(data[0].url)
      setParsedData(parsed.data)
      // Handle Error
    } else {
      setIsSuccess(false)
      const errorsMessage = fromZodError(parsed.error)
      setParsedData([])
      setErrors(String(errorsMessage))
    }
  }

  const handleClear = () => {
    setParsedData([])
    setErrors(undefined)
    setIsSuccess(undefined)
  }

  return (
    <RequestContainer>
      <ResultsCard>
        <TopLeftSection>
          {isSuccess && parsedData ? (
            <>
              <InfoCard>
                <LabelHeader>Breed</LabelHeader>
                <p>{parsedData[0].breeds[0].name}</p>
              </InfoCard>
              <InfoCard>
                <LabelHeader>Temperament</LabelHeader>
                <p>{parsedData[0].breeds[0].temperament}</p>
              </InfoCard>
              <InfoCard>
                <LabelHeader>Description</LabelHeader>
                <p>{parsedData[0].breeds[0].description}</p>
              </InfoCard>
            </>
          ) : (
            <PlaceholderContainer>
              {errors ? (
                <ErrorMessage>{errors}</ErrorMessage>
              ) : (
                <p>Go get cat</p>
              )}
            </PlaceholderContainer>
          )}
        </TopLeftSection>
        <TopRightSection>
          {isSuccess && parsedData ? (
            <>
              <Image src={catUrl} alt="cat" />
            </>
          ) : (
            <PlaceholderContainer>
              {errors ? (
                <Image src={errorImage} alt="error" />
              ) : (
                <Image src={resetImage} alt="reset" />
              )}
            </PlaceholderContainer>
          )}
        </TopRightSection>
        <BottomLeftSection>
          <Button onClick={fetchCat}>Get Cat</Button>
        </BottomLeftSection>
        <BottomRightSection>
          <Button isResetButton onClick={handleClear}>
            Reset
          </Button>
        </BottomRightSection>
      </ResultsCard>
    </RequestContainer>
  )
}

export default Request

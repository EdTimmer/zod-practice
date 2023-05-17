import { useState } from 'react'
import { z } from 'zod'
import { fromZodError } from 'zod-validation-error'

import {
  RequestContainer,
  ResultsCard,
  TopLeftSection,
  TopRightSection,
  BottomLeftSection,
  BottomRightSection,
  SubmitButton,
  ResetButton,
  Image,
  ErrorContainer,
  ErrorMessage,
  PlaceholderContainer,
  InfoCard,
  InfoNumber,
  ParagraphHeader,
  NumberHeader,
} from './Request.css'
import errorImage from '../assets/cat-error.png'
import resetImage from '../assets/doge.png'

const CatSchema = z.array(
  z.object({
    url: z.string().url(),
    breeds: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        temperament: z.string(),
        affection_level: z.number(),
        energy_level: z.number(),
        // score: z.number(),
      }),
    ),
  }),
)

type CatType = z.infer<typeof CatSchema>

const Request = () => {
  const [parsedData, setParsedData] = useState<CatType>()
  const [isSuccess, setIsSuccess] = useState<boolean>()
  const [catUrl, setCatUrl] = useState<string>()
  const [errors, setErrors] = useState<string[]>()

  const apiKey =
    'live_SDlCPG7Qb9dLy1ZgZo2jNek2fdwN2ZJ1uOQvwSEygdEsT7xTOYUOjJMnIczWO71E'

  const fetchCat = async () => {
    const data = await fetch(
      `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${apiKey}`,
    ).then((res) => res.json())

    console.log('raw data', data)
    // const parsedNotSafe = CatSchema.parse(data);
    // console.log('parsedNotSafe', parsedNotSafe)
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
      setErrors(String(errorsMessage).split(';'))
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
                <ParagraphHeader>Breed</ParagraphHeader>
                <p>{parsedData[0].breeds[0].name}</p>
              </InfoCard>
              <InfoNumber>
                <NumberHeader>Affection Level</NumberHeader>
                <p>{parsedData[0].breeds[0].affection_level}</p>
              </InfoNumber>
              <InfoNumber>
                <NumberHeader>Energy Level</NumberHeader>
                <p>{parsedData[0].breeds[0].energy_level}</p>
              </InfoNumber>
              <InfoCard>
                <ParagraphHeader>Temperament</ParagraphHeader>
                <p>{parsedData[0].breeds[0].temperament}</p>
              </InfoCard>
              <InfoCard>
                <ParagraphHeader>Description</ParagraphHeader>
                <p>{parsedData[0].breeds[0].description}</p>
              </InfoCard>
              <dialog>Test</dialog>
            </>
          ) : (
            <PlaceholderContainer>
              {errors ? (
                <ErrorContainer>
                  {errors.map((err, index) => {
                    return <ErrorMessage key={index}>{err}</ErrorMessage>
                  })}
                </ErrorContainer>
              ) : (
                <p>Wow, such empty</p>
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
          <SubmitButton onClick={fetchCat}>Get Cat</SubmitButton>
        </BottomLeftSection>
        <BottomRightSection>
          <ResetButton onClick={handleClear}>Reset</ResetButton>
        </BottomRightSection>
      </ResultsCard>
    </RequestContainer>
  )
}

export default Request

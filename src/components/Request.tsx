import { useState } from 'react'
import { ZodIssue, z } from 'zod'
import { ValidationError, fromZodError } from 'zod-validation-error'

import {
  ResultsCard,
  RequestButton,
  ResultsContainer,
  Image,
  DataContainer,
  ErrorMessage,
  PlaceholderContainer,
} from './Request.css'
import errorImage from '../assets/cat-error.png'
import resetImage from '../assets/such-empty.png'

const CatSchema = z.array(
  z.object({
    url: z.string().url(),
    // score: z.number()
  }),
)

type PersonType = z.infer<typeof CatSchema>

const Request = () => {
  const [parsedData, setParsedData] = useState<PersonType[]>()
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
    // <div>
    //   <h1>Validate and Filter an API Call</h1>
      <ResultsCard>
        <RequestButton onClick={fetchCat}>Get Cat</RequestButton>
        <ResultsContainer>
          <DataContainer>
            {isSuccess ? (
              <Image src={catUrl} alt="cat" />
            ) : (
              <PlaceholderContainer>
                {errors ? (
                  <Image src={errorImage} alt="error" />
                ) : (
                  <Image src={resetImage} alt="reset" />
                )}
              </PlaceholderContainer>
            )}
          </DataContainer>
        </ResultsContainer>
        <RequestButton isResetButton onClick={handleClear}>
          Reset
        </RequestButton>
      </ResultsCard>
    // </div>
  )
}

export default Request

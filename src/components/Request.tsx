import { useState } from 'react'
import { z } from 'zod'

import {
  ResultsCard,
  RequestButton,
  ResultsContainer,
  Image,
  DataContainer,
} from './Request.css'
import xwing from '../assets/x-wing.png'

const PersonSchema = z.object({
  name: z.number(),
  mass: z.union([z.number(), z.string()]),
})

const ResultsSchema = z.object({
  results: z.array(PersonSchema),
})

type PersonType = z.infer<typeof PersonSchema>

const Request = () => {
  const [isShowImage, setIsShowImage] = useState(true)
  const [parsedData, setParsedData] = useState<PersonType[]>()

  const fetchPeople = async () => {
    const data = await fetch(
      // 'https://www.totaltypescript.com/swapi/people.json',
      'https://swapi.dev/api/people/1/',
    ).then((res) => res.json())
    
    console.log('data', data)

    const parsed = ResultsSchema.parse(data)

    console.log('data', data)

    setIsShowImage(false)
    setParsedData(parsed.results)
  }

  const handleClear = () => {
    console.log('pressed')
    setIsShowImage(true)
    setParsedData([])
  }

  return (
    <div>
      <h1>Validate and Filter an API Call</h1>
      <ResultsCard>
        <RequestButton onClick={fetchPeople}>Get Data</RequestButton>
        <ResultsContainer>
          {/* {parsedData?.length ? ( */}
          <DataContainer isShowImage={isShowImage}>
            {parsedData?.map((person, index) => {
              return (
                <div key={index}>
                  <p>{JSON.stringify(person, null, '\t')}</p>
                </div>
              )
            })}
          </DataContainer>
          {/* ) : ( */}
          <Image isShowImage={isShowImage} src={xwing} alt="x-wing fighter" />
          {/* )} */}
        </ResultsContainer>
        <RequestButton isResetButton onClick={handleClear}>
          Clear
        </RequestButton>
      </ResultsCard>
    </div>
  )
}

export default Request

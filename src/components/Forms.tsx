import { FormsContainer, FormPage } from './Forms.css'
import YupForm from './YupForm'
import ZodForm from './ZodForm'

const Forms = () => {
  return (
    <FormPage>
      <FormsContainer>
        <YupForm />
        <ZodForm />
      </FormsContainer>
    </FormPage>
  )
}

export default Forms

import { FormsContainer } from "./Forms.css"
import YupForm from "./YupForm"
import ZodForm from "./ZodForm"

const Forms = () => {
  return (
    <FormsContainer>
      <YupForm />
      <ZodForm />
    </FormsContainer>
  )
}

export default Forms
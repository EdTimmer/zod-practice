import { FormsContainer, HomeContainer } from "./Forms.css"
import YupForm from "./YupForm"
import ZodForm from "./ZodForm"

const Forms = () => {
  return (
    <HomeContainer>
      <FormsContainer>
        <YupForm />
        <ZodForm />
      </FormsContainer>
    </HomeContainer>
  )
}

export default Forms
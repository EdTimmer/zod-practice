import { AppContainer, FormsContainer } from './App.css'
import ZodForm from './components/ZodForm'
import YupForm from './components/YupForm'


const App = () => {

  return (
    <AppContainer>
      <FormsContainer>
        <YupForm />
        <ZodForm />
      </FormsContainer>
    </AppContainer>
  )
}

export default App

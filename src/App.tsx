import { AppContainer, FormsContainer } from './App.css'
import ZodForm from './components/ZodForm'
import YupForm from './components/YupForm'
import Request from './components/Request'


const App = () => {

  return (
    <AppContainer>
      <Request />
      <FormsContainer>
        <YupForm />
        <ZodForm />
      </FormsContainer>
    </AppContainer>
  )
}

export default App

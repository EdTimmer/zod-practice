import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { AppContainer } from './App.css'

const App = () => {
  return (
    <AppContainer>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite React Temlate</h1>
      <div>
        Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects
      </div>
    </AppContainer>
  )
}

export default App

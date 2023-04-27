import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// import { AppContainer } from './App.css'
import Request from './components/Request'
import Forms from './components/Forms'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Request />} />
          <Route path="/forms" element={<Forms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

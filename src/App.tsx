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
          <Route path="/" element={<Forms />} />
          <Route path="/api" element={<Request />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

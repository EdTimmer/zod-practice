import { BrowserRouter, Routes, Route } from 'react-router-dom'

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

import './App.css'
import { Route, Routes } from 'react-router-dom'
import FullQuestion from './pages/FullQuestion'
import Home from './pages/Home'
import './scss/app.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/question/:id" element={<FullQuestion  />}></Route>
    </Routes>
  )
}

export default App

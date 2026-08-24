import './App.css'
import { Route, Routes } from 'react-router-dom'
import News from './pages/News'
import Home from './pages/home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/News" element={<News />}></Route>
    </Routes>
  )
}

export default App

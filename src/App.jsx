import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ScrollTop from './Components/ScrollToTop'

function App() {

  return (
    <ScrollTop>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </ScrollTop>
  )
}

export default App

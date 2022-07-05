/* eslint-disable no-lone-blocks */
import './App.css'
import { Routes,Route } from 'react-router-dom'
import BookCart from './views/BookCart'
import About from './views/About'
import Error404 from './views/Error404'
import LoginPass from './views/LoginPass'

// const history = createBrowserHistory()

function App() {
  return (
    <Routes >
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<LoginPass />} />
      <Route path="/home" element={<BookCart />} />
    </Routes>

  
  )
}

export default App


/* eslint-disable no-lone-blocks */
import './App.css'
import { Routes,Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

import BookCart from './views/BookCart'
import About from './views/About'
import Error404 from './views/Error404'
import LoginPass from './views/LoginPass'

// import { Router } from 'react-router-dom'

// const history = createBrowserHistory()

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/login-pass" element={<LoginPass />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<BookCart />} />
    </Routes>

  
  )
}

export default App


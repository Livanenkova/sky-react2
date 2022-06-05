/* eslint-disable no-lone-blocks */
import './App.css'
import { Routes,Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

import BookCart from './BookCart'
import About from './page/about'
import Error404 from './page/Error404'
import LoginPass from './page/LoginPass'
// import { Router } from 'react-router-dom'

// const history = createBrowserHistory()

function App() {
  return (
    <main>
    <Routes>
      
      <Route path="/about" element={<About />} />
      <Route path="/login-pass" element={<LoginPass />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<BookCart />} />
    </Routes>
  </main>
  
  )
}

export default App


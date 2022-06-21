/* eslint-disable no-lone-blocks */
import './App.css'
import { Routes,Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

import BookCart from './page/BookCart'
import About from './page/about'
import Error404 from './page/Error404'
import LoginPass from './page/LoginPass'
import NumberGenerator from './page/NumberGenerator'
import HiddenText from './components/HiddenText'
import ConsoleApp from './page/ConsoleApp'

// import { Router } from 'react-router-dom'

// const history = createBrowserHistory()

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/login-pass" element={<LoginPass />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<BookCart />} />
      <Route path="/number-generator" element={<NumberGenerator />} />
      <Route path="/hidden-text" element={<HiddenText />} />
      <Route path="/console-app" element={<ConsoleApp />} />
    </Routes>

  
  )
}

export default App


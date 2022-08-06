/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-lone-blocks */
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { useState} from "react";
import BookCart from './views/BookCart'
import About from './views/About'
import Error404 from './views/Error404'
import LoginPass from './views/LoginPass'
import Order from './views/Order'
import BookDesk from './components/BookDesc'
import UserOrder from './components/UserOrder'
import UserContext from './contexts/UserContext';
import OrderReady from './components/OrderReady';
import NumberGenerator from './page/NumberGenerator';

// const history = createBrowserHistory()

function App() {
  const [inputValue, setInputField] = useState({
    login: '',
    password: '',
    name: '',
  })
  return (
    <Routes >
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<LoginPass inputValue={inputValue} setInputField={setInputField}/>} />
      <Route path="/book-cart" element={<BookCart />} />
      <Route path="/home" element={<Order />} />
      <Route path="/book-desk" element={<BookDesk />} />
      <Route path="/number-generator" element={<NumberGenerator />} />
      <Route path="/user-order" element={<UserContext.Provider value={inputValue}><UserOrder inputValue={inputValue} setInputField={setInputField} /></UserContext.Provider>} />
      <Route path="/order-ready" element={<UserContext.Provider value={inputValue} ><OrderReady /></UserContext.Provider>} />
    </Routes>
  )
}

export default App


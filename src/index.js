import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Clicker from './Clicker';
// import ClickerFn from './ClickerFn';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <Clicker/>
    <ClickerFn/> */}
  </React.StrictMode>
);

reportWebVitals();

import  { useState,useRef } from "react";
import { Link} from 'react-router-dom'
// import useInputRequired from "../useInputRequaried"

function LoginPass() {
  const [errorMessageStr, errorMessageSet] = useState('');
  const [inputValue, setInputField] = useState({
    login: '',
    password: '',
  })

  const loginRef = useRef(null)
  const passwordRef = useRef(null)

  const inputHandler = (e) => {
    setInputField(() => ({
      ...inputValue,
      [e.target.name]: e.target.value,
    }));
  };

  const submitButton = () => {
    if(!/@/.test(inputValue.login) && !/.com/.test(loginRef.current.value)){
      loginRef.current.focus()
      errorMessageSet(`Логин должен быть примерно таким "@domain.com"`);
      loginRef.current.style.border=" 3px solid red";
    } else if(passwordRef.current.value.length < 5) {

      passwordRef.current.focus()
      passwordRef.current.style.border=" 3px solid red";
      errorMessageSet(`Пароль должен быть длиннее 6 символов!`);
    
    } else {
      errorMessageSet(`Ваш логин: ${inputValue.login}  Ваш пароль: ${inputValue.password}`);
      loginRef.current.style.border="1px solid grey";
      passwordRef.current.style.border="1px solid grey";
    }
  }
  
    return (
    <div className="listView">
      <label htmlFor='login'>
        Логин:
      <input type="email" ref={loginRef} name="login"  onChange={inputHandler}  className="login" placeholder='login' id='login'/>
      </label>
      <label htmlFor='password'>
        Пароль:
      <input type="password" ref={passwordRef} name="password" onChange={inputHandler} className="password" placeholder='password' id='password'/>
      </label>
      <div>{errorMessageStr}</div>
      <button type="button" onClick={submitButton} style={{width:"150px"}}>
            Залогиниться
        </button>
      <Link to="/">Main Page</Link>
    </div>
    )
}

export default LoginPass
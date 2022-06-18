import  { useState,useRef } from "react";
import { Link} from 'react-router-dom'

function LoginPass() {
  const [errorMessageStr, errorMessageSet] = useState('');
  const [inputValue, setInputField] = useState({
    login: '',
    password: '',
  })
<<<<<<< HEAD

  const loginRef = useRef(null)
  const passwordRef = useRef(null)
=======
  
>>>>>>> ea188218e1e84e92cc78e78d555b33d2ffacfdc1

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
<<<<<<< HEAD
      <button type="button" onClick={submitButton} style={{width:"150px"}}>
=======
      <button type="button" onClick={submitButton} style={{width: "150px"}} >
>>>>>>> ea188218e1e84e92cc78e78d555b33d2ffacfdc1
            Залогиниться
        </button>
      <Link to="/">Main Page</Link>
    </div>
    )
}

export default LoginPass
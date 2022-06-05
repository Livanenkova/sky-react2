import  { useState } from "react";
import { Link} from 'react-router-dom'
// import useInputRequired from "../useInputRequaried"

function LoginPass() {
  const [errorMessageStr, errorMessageSet] = useState('');
  const [inputValue, setInputField] = useState({
    login: '',
    password: '',
  })
  
  // const isInputRequired = useInputRequired();

  const inputHandler = (e) => {
    setInputField(() => ({
      ...inputValue,
      [e.target.name]: e.target.value,
    }));
  };

  // function setValueLogin(e) {
  //   setInputField({login: e.target.value })
  //   // const required = false;
  //   // const result = isInputRequired.onChange(inputValue.login, required)
  //   // errorMessageSet(result)
  // }

  // function setValuePassword(e){
  //   setInputField({password: e.target.value })
  //   // const required = false;
  //   // const result = isInputRequired.onChange(inputValue.password, required)
  //   // errorMessageSet(result)
  // }

  const submitButton = () => {
    if(!/@/.test(inputValue.login) && !/.com/.test(inputValue.login) ) {
      errorMessageSet(`Логин должен быть примерно таким "@domain.com"`)
    
    } else if(inputValue.password.length < 5) {
      errorMessageSet(`Пароль должен быть больше 6 символов!`)
    
    } else {
      errorMessageSet(`Ваш логин: ${inputValue.login}  Ваш пароль: ${inputValue.password}`)
    }
  }
    



  // function setError(e) {
  //   const userValue = e.target.value
  //   const required = false;
  //   const result = isInputRequired.onBlur(userValue, required)
  //   errorMessageSet(result)
  // }
  
    return (
    <div className="listView">
      <label htmlFor='login'>
        Логин:
      <input type="email"   name="login"  onChange={inputHandler}  className="login" placeholder='login' id='login'/>
      </label>
      <label htmlFor='password'>
        Пароль:
      <input type="password" name="password" onChange={inputHandler} className="password" placeholder='password' id='password'/>
      </label>
      <div>{errorMessageStr}</div>
      <button type="button" onClick={submitButton}>
            Залогиниться
        </button>
      <Link to="/">Main Page</Link>
    </div>
    )
}

export default LoginPass
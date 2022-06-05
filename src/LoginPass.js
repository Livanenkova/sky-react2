import  { useState } from "react";
import useInputRequired from "./useInputRequaried"

function LoginPass() {
  const [errorMessageStr, errorMessageSet] = useState('');

  
  const isInputRequired = useInputRequired();

  function setValue(e) {
    const {value} = e.target
    const required = false;
    const result = isInputRequired.onChange(value,required)
    errorMessageSet(result)
  }

  function setError(e) {
    const {value} = e.target
    const required = false;
    const result = isInputRequired.onBlur(value,required)
    errorMessageSet(result)
  }
  
    return (
    <div>
      <label htmlFor='login'>
        Логин:
      <input type="text" onChange={setValue} onBlur={setError} className="login" placeholder='login' id='login' />
      </label>
      <label htmlFor='password'>
        Пароль:
      <input type="password" onChange={setValue} onBlur={setError} className="password" placeholder='password' id='password'/>
      </label>
      <div>{errorMessageStr}</div>
    </div>
    )
}

export default LoginPass
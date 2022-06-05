import  { useState } from "react";
import { Link} from 'react-router-dom'
import useInputRequired from "../useInputRequaried"

function LoginPass() {
  const [errorMessageStr, errorMessageSet] = useState('');
  
  const isInputRequired = useInputRequired();

  function setValue(e) {
    const userValue = e.target.value
    const required = false;
    const result = isInputRequired.onChange(userValue, required)
    errorMessageSet(result)
  }

  function setError(e) {
    const userValue = e.target.value
    const required = false;
    const result = isInputRequired.onBlur(userValue, required)
    errorMessageSet(result)
  }
  
    return (
    <div className="listView">
      <label htmlFor='login'>
        Логин:
      <input type="text" onChange={setValue} onBlur={setError} className="login" placeholder='login' id='login'/>
      </label>
      <label htmlFor='password'>
        Пароль:
      <input type="password" onChange={setValue} onBlur={setError} className="password" placeholder='password' id='password'/>
      </label>
      <div>{errorMessageStr}</div>
      <Link to="/">Main Page</Link>
    </div>
    )
}

export default LoginPass
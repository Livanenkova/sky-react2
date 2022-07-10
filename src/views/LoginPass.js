import { useState,useRef } from "react";
// import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext'
import UserOrder from "../components/UserOrder";

function LoginPass(props) {
  const [errorMessageStr, errorMessageSet] = useState('');
  // const [inputValue, setInputField] = useState({
  //   login: '',
  //   password: '',
  // })
  const navigate = useNavigate();

  const loginRef = useRef(null)
  const passwordRef = useRef(null)

  const inputHandler = (e) => {
    console.log(e.target.value)
    props.setInputField(() => ({
      ...props.inputValue,
      [e.target.name]: e.target.value,
    }));
  };

  const submitButton = () => {
    if(!/@/.test(props.inputValue.login) && !/.com/.test(loginRef.current.value)){
      loginRef.current.focus()
      errorMessageSet(`Логин должен быть примерно таким "@domain.com"`);
      loginRef.current.style.border=" 3px solid red";
    } else if(passwordRef.current.value.length < 5) {

      passwordRef.current.focus()
      passwordRef.current.style.border=" 3px solid red";
      errorMessageSet(`Пароль должен быть длиннее 6 символов!`);
    
    } else {
      errorMessageSet(`Ваш логин: ${props.inputValue.login}  Ваш пароль: ${props.inputValue.password}`);
      loginRef.current.style.border="1px solid grey";
      passwordRef.current.style.border="1px solid grey";
      navigate('/home');
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
        {/* <UserOrder /> */}
    </div>
    
    )
}

export default LoginPass
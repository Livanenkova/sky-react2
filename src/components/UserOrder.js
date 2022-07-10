/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components'
import { useNavigate,useLocation,Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const InputDataWrapper = styled.div`
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Input = styled.input`
  display: block;
  border: 1px solid grey;
`

const Label = styled.label`
  border: none;
`

const BtnReturn = styled.button`
  background: yellow;
  border: none;
  padding: 7px;
  border-radius: 5px;
`

const BtnSend = styled.button`
  background: green;
  color: white;
  padding: 7px;
  border: none;
  border-radius: 5px;
`

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export default function UserOrder(props) {
  const location = useLocation();
  console.log(location)
  const navigate = useNavigate()
  const userInfo = useContext(UserContext)

  const inputHandler = (e) => {
    props.setInputField(() => ({
      ...props.inputValue,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <InputDataWrapper>
      <h1>Input Data</h1>
      <Label htmlFor="email">
        Email
        <Input type="text" defaultValue={userInfo.login} id="email" />
      </Label>
      <Label htmlFor="phone">
        Phone
        <Input type="text" id="phone" />
      </Label>
      <Label htmlFor="name">
        Name
        <Input type="text" id="name" name="name" onChange={inputHandler} />
      </Label>
      <BtnWrapper>
        <BtnReturn
          type="button"
          onClick={() => navigate('/home', { replace: true })}
        >
          Back to cart
        </BtnReturn>

        <Link to="/order-ready" state={location}>Send</Link>
      </BtnWrapper>
    </InputDataWrapper>
  )
}

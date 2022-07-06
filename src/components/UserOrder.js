/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components'
import { useNavigate} from 'react-router-dom'
import { useContext } from "react";
import UserContext from '../contexts/UserContext'

const InputDataWrapper = styled.div`
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
`

const Input = styled.input`
  display: block;
  border: 1px solid grey;
`
const Label = styled.label`
`

const BtnReturn = styled.button`
  background:yellow;
  border: none;
  padding: 7px;
  border-radius:5px;
`

const BtnSend = styled.button`
  background:green;
  color:white;
  padding: 7px;
  border: none;
  border-radius:5px;
`

const BtnWrapper = styled.div`
display: flex;
flex-direction:row;
margin-top:10px;
`

export default function UserOrder() {
  const navigate = useNavigate();
  const userEmail = useContext(UserContext)
  console.log(userEmail)
  return (
    <InputDataWrapper>
      <h1>Input Data</h1>
      <Label htmlFor="email">Email
        <Input type="text" defaultValue={userEmail} id="email"/>
      </Label>
      <Label htmlFor="phone">Phone
        <Input type="text" id="phone"/>
      </Label>
      <Label htmlFor="name">Name
        <Input type="text" id="name"/>
      </Label>
      <BtnWrapper>
        <BtnReturn type='button'  onClick={() => navigate("/home", { replace: true })}>Back to cart</BtnReturn>
        <BtnSend type='button' onClick={() => navigate("/order-ready", { replace: true })}>Send</BtnSend>
      </BtnWrapper>
    </InputDataWrapper>
    
  )
}
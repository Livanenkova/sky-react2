/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components'
import { useContext } from "react";
import {useLocation } from 'react-router-dom'
import UserContext from '../contexts/UserContext'


const OrderReadyWrapper = styled.div`
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
`

export default function orderReady() {
  const userInfo = useContext(UserContext)
  console.log(userInfo)
  const location = useLocation();
  console.log(location.state.state)
  return (
    <OrderReadyWrapper>
      <p>{`Имя: ${userInfo.name}`}</p>
      <p>{`Почта: ${userInfo.login}`}</p>
      <p>{`Количество: ${location.state.state.quantity}`}</p>
      <p>{`Сумма: ${location.state.state.amount}`}</p>
    </OrderReadyWrapper>
    
  )
}
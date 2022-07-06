/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components'

const OrderReadyWrapper = styled.div`
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
`

export default function orderReady(props) {

  return (
    <OrderReadyWrapper>
      <p>Имя</p>
      <p>Почта</p>
      <p>Сумма</p>
      <p>Позиции</p>
    </OrderReadyWrapper>
    
  )
}
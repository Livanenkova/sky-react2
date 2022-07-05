import { useNavigate ,useLocation } from 'react-router-dom'
import styled from 'styled-components'

const BookDeskWrapper = styled.div`
    border: 1px solid #d9ebe8;
    padding: 10px;
    margin-top: 20px;
`

const BookDeskCart= styled.div`
  background: #fff;
  float: left;
  width: 220px;
  border: 1px solid #8cb0aa;
  border-radius: 6px;
  margin: 10px;
  padding: 10px;
`


export default function BookDesk() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { description,productName } = location.state 
  console.log(location)
  return (
    <BookDeskWrapper>
      <BookDeskCart>
      <h2>{productName}</h2>
      <p>{description}</p>
      <button type='button' onClick={() => navigate(-1)}>Go back</button>
      </BookDeskCart>
    </BookDeskWrapper>
  )
}
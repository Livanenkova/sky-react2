import { Link} from 'react-router-dom'

export default function OrderDetail(props) {
  console.log(props)
  const {productName,description} = props

  return (
    <div className="order-detail shopItem" id={props.id} key={props.id}>
      <h2 className="productName ">{props.productName}</h2>
      <div className="price">Price: {props.price} / -</div>
      <Link to="/book-desk" state={{ description,productName }}>Read more</Link>
      <div className="quantity"> Quantity: {props.quantity}</div>
      <div className="buttonsContainer">
          <button type="button" 
          className="addButton" 
          onClick = { (e) => props.increment(e, props.id,props.price) }>+</button>
          <button type="button" 
          className="removeButton" 
          onClick = {(e) => props.decrement(e, props.id,props.price)}>–</button>
        </div>
    </div>
  )
}
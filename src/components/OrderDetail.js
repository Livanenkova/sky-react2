
export default function OrderDetail(props) {
  console.log(props)
  return (
    <div className="order-detail shopItem" id={props.id} key={props.id}>
      <h2 className="productName ">{props.productName}</h2>
      <div className="price">Price: {props.price} / -</div>
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
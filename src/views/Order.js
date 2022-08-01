import React from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios';
import OrderDetail from '../components/OrderDetail'


export default class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
      quantity: 0,
      details: [],
    }
    this.DecrementQuantityWithPrice = this.DecrementQuantityWithPrice.bind(this);
    this.IncrementQuantityWithPrice = this.IncrementQuantityWithPrice.bind(this);
  }
  
  componentDidMount() {
    axios.get(`https://api.jsonbin.io/v3/b/62e7a8bc1c7f436f211a9a3d`)
    .then(res => {
      const details = res.data.record;
      this.setState({ details });
      console.log('GET Axios',details)
    })
  }

  IncrementQuantityWithPrice(e, index,price) {
    e.preventDefault() 
    this.setState(state => ({quantity: state.quantity + 1}))
    this.setState(state => ({amount: state.amount + price }))

  }

  DecrementQuantityWithPrice(e, index,price) {
    e.preventDefault()
    this.setState((prevState) => ({ quantity: prevState.quantity - 1 }))
    this.setState((prevState) => ({ amount: prevState.amount - price }))
  }

  render() {
    const getOrderBook = this.state.details.map((details) => (
      <OrderDetail
        key={details.id}
        id={details.id}
        description={details.description}
        productName={details.productName}
        price={Number(details.price)}
        quantity={Number(details.quantity)}
        increment={this.IncrementQuantityWithPrice}
        decrement={this.DecrementQuantityWithPrice}
      />
    ))
    return (
      <div className="order">
        <div>{getOrderBook}</div>
        <div className="clear" />
        <p className="total">
          Total Quantity : <b> {`${this.state.amount}`}</b>
        </p>
        <p className="total">
          Total Price : <b> /- {`${this.state.quantity}`}</b>
        </p>
        <Link to="/user-order" state={this.state}>User-Order</Link>
      </div>
    )
  }
}

import React from 'react'
import OrderDetail from './OrderDetail'

export default class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
      quantity: 0,
      details: [
        {
          id: 1,
          productName: 'Война и мир - Л.Н.Толстой',
          price: 800,
          quantity: 0,
        },
        {
          id: 2,
          productName: 'Две жизни - К.Е.Антарова',
          price: 700,
          quantity: 0,
        },
        {
          id: 3,
          productName: 'Разговор с богом - Н.Д.Уолша',
          price: 1000,
          quantity: 0,
        },
        {
          id: 4,
          productName: 'Хохот Шамана - В.П.Серкин',
          price: 600,
          quantity: 0,
        },
        {
          id: 5,
          productName: 'Хроники Ехо - Макс Фрай',
          price: 400,
          quantity: 0,
        },
      ],
    }
    this.DecrementQuantityWithPrice = this.DecrementQuantityWithPrice.bind(this);
    this.IncrementQuantityWithPrice = this.IncrementQuantityWithPrice.bind(this);
  }

  IncrementQuantityWithPrice(e, index,price) {

    console.log(index)
    console.log(index)
    e.preventDefault() 
    this.setState(state => ({quantity: state.quantity + 1}))
    this.setState(state => ({amount: state.amount + price }))

    
    const data = this.state.details.map((details) => {
      console.log(data)
      if (details.id === index) {
            // this.setState(state => ({details.quantity: state.details.quantity + 1}))
        return {
          id: details.id,
          productName: details.productName,
          price: details.price,
          quantity: details.quantity + 1,
        }
      }
      return {
        id: details.id,
        productName: details.productName,
        price: details.price,
        quantity: details.quantity,
      }
    })
  }

  DecrementQuantityWithPrice(e, index,price) {
    console.log(index)
    e.preventDefault()
    // this.setState((prevState) => ({ quantity: prevState.state.quantity - 1 }))
    // this.setState(state => ({quantity: state.quantity -1}))
    // this.setState(state => ({quantity: state.amount - price }))
    this.setState((prevState) => ({ quantity: prevState.quantity - 1 }))
    this.setState((prevState) => ({ amount: prevState.amount - price }))
  }

  render() {
    const getOrderBook = this.state.details.map((details) => (
      <OrderDetail
        key={details.id}
        id={details.id}
        productName={details.productName}
        price={details.price}
        quantity={details.quantity}
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
      </div>
    )
  }
}

import React from 'react'
import { Link} from 'react-router-dom'
import OrderDetail from '../components/OrderDetail'


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
          description:'«Война́ и мир» (рус. дореф. «Война и миръ») — роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах. Эпилог романа доводит повествование до 1820 года.',
        },
        {
          id: 2,
          productName: 'Две жизни - К.Е.Антарова',
          price: 700,
          quantity: 0,
          description:'В книге Конкордии Евгеньевны Антаровой "Две жизни" впервые в беллетристической форме даются яркие и глубокие образы Великих Учителей, выписанные с огромной любовью, показан их самоотверженный труд на благо человечества. Учение, изложенное в книгах "Живой Этики", как бы проиллюстрировано судьбами героев книги "Две жизни".',
        },
        {
          id: 3,
          productName: 'Разговор с богом - Н.Д.Уолша',
          price: 1000,
          quantity: 0,
          description:'Перед читателем - необычный документ нашего времени: послание от Бога - своеобразная программа духовной революции, исчерпывающая все сферы познания и деятельности человека - от сугубо личной до планетарной.',
        },
        {
          id: 4,
          productName: 'Хохот Шамана - В.П.Серкин',
          price: 600,
          quantity: 0,
          description:'В 1997 году психолог Владимир Серкин случайно познакомился с человеком, которого все окружающие считали шаманом.',
        },
        {
          id: 5,
          productName: 'Хроники Ехо - Макс Фрай',
          price: 400,
          quantity: 0,
          description:'Серия книг от одного из самого известного автора современности Макса Фрая, истории про Вселенную Ехо',
        },
      ],
    }
    this.DecrementQuantityWithPrice = this.DecrementQuantityWithPrice.bind(this);
    this.IncrementQuantityWithPrice = this.IncrementQuantityWithPrice.bind(this);
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
        <Link to="/user-order" state={this.state}>User-Order</Link>
      </div>
    )
  }
}

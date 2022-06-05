/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { useState } from 'react'
import MinMax from './MinMax'
import TotalPrice from './TotalPrice' 
import LoginPass from './LoginPass'

function booksStub() {
  return [
    {
      id: 1,
      title: 'Война и мир - Л.Н.Толстой',
      price: 800,
      rest: 10,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Две жизни - К.Е.Антарова',
      price: 700,
      rest: 5,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Разговор с богом - Н.Д.Уолша',
      price: 1000,
      rest: 2,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Хохот Шамана - В.П.Серкин',
      price: 600,
      rest: 8,
      quantity: 1,
    },
    {
      id: 5,
      title: 'Хроники Ехо - Макс Фрай',
      price: 400,
      rest: 8,
      quantity: 1,
    },
  ]
}
export default function BookCart() {
  const [books, setBooks] = useState(booksStub())

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  function deleteBtn(idDeleteBook) {
    setBooks(books.filter((book) => book.id !== idDeleteBook))
    return books
  }

  return (
    <div className="some">
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <MinMax
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity) => setQuantity(book.id, quantity)}
                />
              </td>
              <td>{book.price * book.quantity}</td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={(quantity) => deleteBtn(book.id, quantity)}
                    className="removeButton"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <TotalPrice
          booksCart={books.reduce(
            (result, book) =>
              (result += Number(book.price) * Number(book.quantity)),
            0
          )}
        />
      </table>
      <LoginPass/ >
    </div>
  )
}

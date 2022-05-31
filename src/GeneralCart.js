/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
function GeneralCart({ booksArray}) {
  const booksTotalCell = booksArray.reduce(
    (result, book) =>
      (result += Number(book.price) * Number(book.quantity)),
    0
  )
  const booksNumber = booksArray.reduce(
    (result, book) =>
      (result += Number(book.quantity))
      ,
    0
  )
  return (
    
    
    <div>
      <h3>Total: {booksTotalCell}</h3>
      <h3>Book number : {booksNumber}</h3>
    </div>
  )
}

export default GeneralCart



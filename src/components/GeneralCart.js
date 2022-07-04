/* eslint-disable react/no-typos */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import propTypes from "prop-types"


function GeneralCart({ booksArray}) {
  console.log(typeof booksArray)
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

GeneralCart.propTypes = {
  booksArray:  propTypes.instanceOf(Array).isRequired,
}

export default GeneralCart



/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React from 'react'

class Clicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { countSubmit: 0, countClick: 1 }

    this.handleClick = this.handleClick.bind(this)
  }

  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    this.setState((prevState) => ({ countSubmit: prevState.countSubmit + 1 }))
  }

  handleClick(e) {
    console.log(e)
    this.setState((prevState) => ({ countClick: prevState.countClick + 1 }))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button>{`${this.state.countSubmit} clicks`}</button>
        </form>
        <form>
          <button type="button" onClick={this.handleClick}>
            {`${this.state.countClick} clicks`}
          </button>
        </form>
      </div>
    )
  }
}

export default Clicker

import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { current: '' }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder='Максимальное значение' />
        <span>{this.state.current}</span>
      </div>
    )
  }
}
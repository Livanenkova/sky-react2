import React from 'react'
// import './styles.css'

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0,
      isCounting: false}
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="ReacTimer">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button type="button" onClick={this.handleStart}>Start</button>
        ) : (
          <button type="button" onClick={this.handleStop}>Stop</button>
        )}
        <button type="button" onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

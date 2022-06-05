import React from 'react'
// import './styles.css'

const timeInterval = 100

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isCounting: false,
    }
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleStart = () => {
    this.timerStart()

    this.setState({ isCounting: true })
  }

  handleStop = () => {
    this.timerStop()
    this.setState({ isCounting: false })
  }

  handleReset = () => {
    this.timerReset()
    this.setState({ count: 0 })
    this.setState({ isCounting: false })
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  timerStart() {
    this.timerId = setInterval(() => this.increment(), 1000 / timeInterval)
  }

  timerStop() {
    clearInterval(this.timerId)
  }

  timerReset() {
    this.setState({ count: 0 })
    clearInterval(this.timerId)
  }

  render() {
    const timeValue = this.state.count
    return (
      <div className="ReacTimer">
        <h1>React Timer</h1>
        <div>
          {`${Math.round(timeValue / timeInterval / 60 / 60)}`} :{' '}
          {`${Math.round(timeValue / timeInterval / 60)}`} :
          {`${Math.round(timeValue / timeInterval)}`} :{' '}
          {`${timeValue % timeInterval}`}{' '}
        </div>
        {!this.state.isCounting ? (
          <button type="button" onClick={this.handleStart}>
            Start
          </button>
        ) : (
          <button type="button" onClick={this.handleStop}>
            Stop
          </button>
        )}
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    )
  }
}

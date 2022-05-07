import React from 'react'
// import './styles.css'

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isCounting: false,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  

  handleStart = () => {
    const time = Date.now()
    const sek = Math.floor((time / 1000) % 60)

    this.state.count = sek

    const min = Math.floor((time / (1000 * 60)) % 60)

    if (sek < 10 && min < 10) {
      const answer = `0${min}:0${sek}`
      this.setState({count: answer});
    }

    if (sek < 10) {
      const answer = `${min}:0${sek}`
      this.setState({count: answer});
    }

    if (min < 10) {
      const answer = `0${min}:${sek}`
      this.setState({count: answer});
    }

    this.setState({isCounting: true});
  }

  handleStop = () => {
    this.setState({count: 0});
    this.setState({isCounting: false});  
  }

  handleReset = () => {
    this.setState({count: 0});
    this.setState({isCounting: false});  
    
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
}

  render() {
    return (
      <div className="ReacTimer">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
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

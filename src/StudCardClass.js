import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { curCount: Number(this.props.minValue)}
  }

  incrementPlus = () => {
    if ( this.state.curCount < this.props.maxValue){
      this.setState((prevState) => ({ curCount: prevState.curCount + 1 }))
    }
  }

  incrementMinus = () => {
    if ( this.state.curCount > this.props.minValue){
      this.setState((prevState) => ({ curCount: prevState.curCount - 1 }))
    }
  }

  startValueCount = () => {
    this.setState((prevState) => ({ curCount: prevState.curCount   }))
  }

  render() {
    return (
      <div>        
      <label htmlFor='inputValue'>
      Введите Максимальное и минимальное значение:
      <input type="text" value={this.state.curCount} placeholder-={this.state.curCount} onChange={this.startValueCount} id='inputValue'/>
    </label>
        <button type="button" onClick={this.incrementPlus}>
          Жми +
        </button>
        <button type="button" onClick={this.incrementMinus}>
          Жми -
        </button>
        <span>{this.state.curCount}</span>
      </div>
    )
  }
}

// const Foo = класс расширяет React.PureComponent {
//   render() {
//     const { title } = this.context;
//     return <div>{title}</div>;
//   }
// };

// function StudCard({ name, text }) {
//   return (
//     <>
//       <hr />
//       <div className="name">{name}</div>
//       <div className="card">{text}</div>
//       <hr />
//     </>
//   )
// }

// export default StudCard

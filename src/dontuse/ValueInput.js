/* eslint-disable class-methods-use-this */
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='minValue'>
          Минимальное значение:
          <input type="text" value={this.state.value} onChange={this.handleChange} id= 'minValue'/>
        </label>
        <label htmlFor='maxValue'>
          Максимальное значение:
          <input type="text" value={this.state.value} onChange={this.handleChange} id= 'maxValue'/>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
import React, { Component } from 'react'

export default class input extends Component {
  state = {
    value: ''
  }
  clearValue() {
    this.setState({
      value: ''
    })
  }
  setValue(input) {
    this.setState({
      value: input
    })
  }
  render() {
    return (
      <div>
        <label>{this.props.name}：</label>
        <input type={this.props.type} value={this.state.value} onChange={(event) => {
          this.setState({
            value: event.target.value
          })
        }}></input>
      </div>
    )
  }
}

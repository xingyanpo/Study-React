import React, { Component } from 'react'

export default class input extends Component {
  render() {
    return (
      <div>
        <label>{this.props.name}：</label>
        <input type={this.props.type} value={this.props.value} onChange={(event) => {
          this.props.inputEvent(event.target.value)
        }}></input>
      </div>
    )
  }
}

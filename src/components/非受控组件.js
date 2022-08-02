import React, { Component } from 'react'

export default class App extends Component {
  input = React.createRef()
  render() {
    return (
      <div>
        <input defaultvalue='hhh' type="text" ref={this.input} />
      </div>
    )
  }
}

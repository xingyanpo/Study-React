import React, { Component } from 'react'
import Sun from './sun1'

export default class App extends Component {
  state = {
    list: [1, 2, 3]
  }
  render() {
    return (
      <div>
        <Sun Arr={this.state.list} color='red' Change={(name) => {
          console.log('我是你爹')
          console.log(name)
        }}/>
      </div>
    )
  }
}

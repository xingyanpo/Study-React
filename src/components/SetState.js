import React, { Component } from 'react'

export default class SetState extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <button onClick={this.func1}>Button(setState同步)</button>
        <button onClick={this.func2}>Button(setState异步)</button>
      </div>
    )
  }

  func1 = () => {

    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count, '回调函数')  // 1
    })
    console.log(this.state.count)  // 1

    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count, '回调函数')  // 1
    })
    console.log(this.state.count)  // 2
  }

  func2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)  // 1
  
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)  // 2
    }, 0);
    
  }
}

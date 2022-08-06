import React, { Component } from 'react'

export default class App extends Component {
  state = {
    component: true
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            component: !this.state.component
          })
        }}>销毁</button>
        {this.state.component && <Child></Child>}
      </div>
    )
  }
}

class Child extends Component {
  componentDidMount() {
    window.onresize = () => {
      console.log('resize')
    }
    this.timer = setInterval(() => {
      console.log('setInterval')
    }, 1000)
  }
  render() {
    return (
      <div>
        子组件
      </div>
    )
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
    window.onresize = null
    clearInterval(this.timer)
  }
}

import React, { Component } from 'react'

export default class App extends Component {
  UNSAFE_componentWillMount() {
    console.log('componentWillMount, 组件将要被挂载，只会执行一次');
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount, 组件已经挂载完成，只会执行一次');
  }
}

import React, { Component } from 'react'

export default class Slot extends Component {
  render() {
    return (
      <div> 
        父组件
      <Child>
        <div>插槽1</div>
        <div>插槽2</div>
      </Child>

      <Child2>
        <div>插槽二 1</div>
        <div>插槽二 2</div>
      </Child2>

      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div style={{marginBottom:'50px',marginTop:'50px'}}>
        子组件
        {this.props.children}
        {this.props.children}
      </div>
    )
  }
}

class Child2 extends Component {
  render() {
    return (
      <div>
        子组件2
        {this.props.children[0]}
        {this.props.children[1]}
      </div>
    )
  }
}

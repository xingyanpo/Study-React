import React, { Component } from 'react'

export default class App extends Component {
  myref = null
  render() {
    return (
      <div>
        <Child callback= {(myref) => {
          this.myref = myref
        }}></Child>
        <button onClick={() => {
          console.log(this.myref, this.myref.current.value)
          this.myref.current.value = ''
          this.myref.current.focus()
        }}>click</button>
      </div>
    )
  }
}

class Child extends Component {
  myref = React.createRef()
  componentDidMount() {
    this.props.callback(this.myref)
  }
  render() {
    return <>
      <input defaultValue={'hhhh'} ref={this.myref} />
    </>
  }
}
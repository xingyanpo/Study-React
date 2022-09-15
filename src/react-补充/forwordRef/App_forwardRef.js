import React, { Component } from 'react'
import { forwardRef } from 'react'

export default class App extends Component {
  myref = React.createRef()
  render() {
    return (
      <div>
        <Child ref={this.myref}></Child>
        <button onClick={() => {
          console.log(this.myref, this.myref.current.value)
          this.myref.current.value = ''
          this.myref.current.focus()
        }}>click</button>
      </div>
    )
  }
}

const Child = forwardRef( (props, ref) => {
  return(
    <>
      <input ref={ref} defaultValue='kkk'/>
    </>
  )
})
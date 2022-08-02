import React, { Component } from 'react'

export default class eventBindComponent extends Component {
  a = `this指向`

  render() {
    return (
      <div>
        <input></input>
        <button onClick={() => {
          console.log( this.a )
        }}>add</button>
        <button onClick={ this.add2.bind(this) }>add2</button>{/* 不推荐 */}
        <button onClick={ this.add3 }>add3</button>
        <button onClick={ () => { // 比较推荐
          this.add4()
        } }>add4</button>
      </div>
    )
  }
  add2() {
    console.log( this.a, this )
  }
  
  add3 = () => {
    console.log('lll')
  }
  
  add4 = () => {
    console.log('www')
  }
}

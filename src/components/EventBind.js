import React, { Component } from 'react'

export default class eventBindComponent extends Component {
  render() {
    return (
      <div>
        <input></input>
        <button onClick={() => {
          console.log('hhh')   // 如果处理逻辑过多，不推荐这种写法 
        }}>add</button>
        <button onClick={ this.add2 }>add2</button>
        <button onClick={ this.add3 }>add3</button>
        <button onClick={ () => { // 比较推荐
          this.add4()
        } }>add4</button>
      </div>
    )
  }
  add2() {
    console.log('kkk')
  }
  
  add3 = () => {
    console.log('lll')
  }
  
  add4 = () => {
    console.log('www')
  }
}

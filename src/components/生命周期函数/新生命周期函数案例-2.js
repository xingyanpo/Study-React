import React, { Component, createRef } from 'react'

export default class App extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
  }
  listRef = createRef()
  render() {
    return (
      <div>
        <h1>邮箱系统</h1>
        <button onClick={() => {
          console.log(this.listRef.current, this.listRef.current.scrollHeight)
        }}>接收邮件</button>
        <ul style={{height:'200px', overflow:'scroll', background: 'yellow'}} ref={this.listRef}>
          {
            this.state.list.map((item, index) => 
            <li style={{ padding: '10px 0'}} key={item}>{item}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

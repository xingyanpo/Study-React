import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    current: 0
  }
  render() {
    return (
      <div>
        <input type='number' onChange={(event) => {
          this.setState({
            current: Number(event.target.value)
          })
        }}></input>
        <div>
          {
          this.state.list.map((item, index) => 
          <Part key={item} current={this.state.current} index={index}></Part>
          )
          }
        </div>
      </div>
    )
  }
}

class Part extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
      return true
    }
      return false
  }
  render() {
    console.log('render')
    return (
      <li style={{listStyle:'none', width: '100px',height:'100px',border:this.props.current === this.props.index ? '1px solid red':'1px solid #000',float:'left',margin:'20px'}}></li>
    )
  }
}
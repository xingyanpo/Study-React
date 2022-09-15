import React, { Component , memo} from 'react'

export default class App extends Component {
  state = {
    father: 'kkk',
    child: 'hhh'
  }
  render() {
    return (
      <div>
        <Child value={this.state.child}></Child>
        <button onClick={() => {
          this.setState({
            father: '222'
          })
        }}>clikc</button>
        <button onClick={() => {
          this.setState({
            child: 'kkk'
          })
        }} >click2</button>
      </div>
    )
  }
}

const Child = memo((props) => {
  console.log('111')
  return (
    <div>Child-{props.value}</div>
  )
})
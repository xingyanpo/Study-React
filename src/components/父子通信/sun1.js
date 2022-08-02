import React, { Component } from 'react'

export default class Sun extends Component {
  state = {
    name: '我是你儿子'
  }
  render() {
    console.log(this.props)
    return (
      <div onClick={() => {
        this.props.Change(this.state.name)
      }}>Sun</div>
    )
  }
}

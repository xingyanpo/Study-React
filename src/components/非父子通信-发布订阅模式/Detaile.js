import React, { Component } from 'react'

export default class Detaile extends Component {
  constructor() {
    super()
    this.state = {
      info: ''
    },
    vessel.subscribe((info)=> {
      this.setState({
        info: info
      })
    })
  }
  render() {
    return (
      <div style={{position:'fixed', top:'0', left:'0', right: '0',bottom: '0',zIndex:'99'}}>{this.state.info}</div>
    )
  }
}

import store from '../redux/store'
import React, { Component } from 'react'

export default class Cinemas extends Component {
  state = {
    city: store.getState().city
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.history.push('/city')
        }}>{this.state.city}</button>
      </div>
    )
  }
}

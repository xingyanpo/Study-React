import store from '../redux/store'
import React, { Component } from 'react'
import CinemaListActionCreator from '../redux/actionCreator/CinemaListActionCreator'
import { NavBar } from 'antd-mobile'

export default class Cinemas extends Component {
  state = {
    city: store.getState().CityReducer.city,
    cinemas: store.getState().CinemaListReducer.cinemas
  }
  unsubscribe = null
  componentDidMount() {
    if (store.getState().CinemaListReducer.cinemas.length === 0) {
      store.dispatch(CinemaListActionCreator())
    } else {
      console.log("store 缓存")
    }
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        cinemas: store.getState().CinemaListReducer.cinemas
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  left = (
    <button style={{ border: 'none', backgroundColor: 'unset' }} onClick={() => {
      this.props.history.push('/city')
    }}>{this.state.city}</button>
  )

  render() {
    return (
      <div>
        <div style={{ position: 'sticky', top: '0', background: '#FFF', boxShadow: '0 3px 3px #eee' }}><NavBar back={null} left={this.left}>Cinemas</NavBar></div>
        <div>
          {
            this.state.cinemas.map((item, index) =>
              <div key={item.name}>{item.name}</div>
            )
          }
        </div>
      </div>
    )
  }
}

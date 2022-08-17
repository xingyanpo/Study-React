import store from '../redux/store'
import React, { Component } from 'react'
import CinemaListActionCreator from '../redux/actionCreator/CinemaListActionCreator'

export default class Cinemas extends Component {
  state = {
    city: store.getState().CityReducer.city,
    cinemas: store.getState().CinemaListReducer.cinemas
  }
  componentDidMount() {
    if (store.getState().CinemaListReducer.cinemas.length === 0){
      store.dispatch(CinemaListActionCreator())
    } else {
      console.log("store 缓存")
    }
    store.subscribe(() => {
      console.log('cinema 订阅', store.getState().CinemaListReducer.cinemas)
      this.setState({
        cinemas: store.getState().CinemaListReducer.cinemas
      })
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.history.push('/city')
        }}>{this.state.city}</button>
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

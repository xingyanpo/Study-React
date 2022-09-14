import React, { Component } from 'react'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          if(store.getState().list1.length === 0) {
            store.dispatch({
              type: 'get-list1'
            })
          } else {
            console.log('缓存', store.getState().list1)
          }
        }}>测试</button>
        <button onClick={() => {
          if(store.getState().list2.length === 0) {
            store.dispatch({
              type: 'get-list2'
            })
          } else {
            console.log('缓存', store.getState().list2)
          }
        }}>测试2</button>
      </div>
    )
  }
}

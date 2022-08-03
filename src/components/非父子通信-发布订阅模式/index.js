import React, { Component } from 'react'

export default class Sublish extends Component {
  render() {
    return (
      <div>Sublist</div>
    )
  }
}

let vessel = {
  message: [],
  // 订阅
  subscribe(callback) {
    this.message.push(callback)
  },

  // 发布
  sublish(text) {
    this.message.forEach(callback => {
      callback && callback(text)
    })
  }
}

// 订阅者
vessel.subscribe((text) => {
  console.log(text)
})
vessel.subscribe((text) => {
  console.log(text)
})

// 发布者
setTimeout(() => {
  vessel.sublish('man')
},0)
setTimeout(() => {
  vessel.sublish('woman')
},0)
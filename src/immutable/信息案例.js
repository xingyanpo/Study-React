import React, { Component } from 'react'
import { fromJS } from 'immutable'

export default class App extends Component {
  state = {
    info: fromJS({
      name: 'zhangsan',
      location: {
        province: '浙江',
        city: '杭州'
      },
      favor: ['吃饭', '睡觉', '学习']
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            info: this.state.info.setIn(['name'], 'lisi').setIn(['location', 'city'], '西湖')
          })
        }}>修改</button>
        <p>{this.state.info.get('name')} </p>
        <p>{this.state.info.get('location').get('province')} {this.state.info.get('location').get('city')}</p>
        <div>{
          this.state.info.get('favor').map((item, index) =>
            <p key={index}>{item} <button onClick={() => {
              this.setState({
                info: this.state.info.updateIn(['favor'], (list) => list.splice(index, 1))
              })
            }}>delete</button></p>
          )
        }</div>
      </div>
    )
  }
}

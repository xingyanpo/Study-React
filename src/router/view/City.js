import React, { Component } from 'react'
import store from '../redux/store'

export default class City extends Component {
  state = {
    citys: ['北京', '上海', '广州', '深圳', '重庆', '武汉', '成都']
  }
  render() {
    return (
      <div>
        {
          this.state.citys.map((item, index) => 
            <div onClick={() => {
              store.dispatch({
                type: 'city',
                cityName: item
              })
              this.props.history.goBack()
            }} style={{cursor:'pointer'}} key={index}>{item}</div>
          )
        }
      </div>
    )
  }
}

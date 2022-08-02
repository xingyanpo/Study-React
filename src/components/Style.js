import React, { Component } from 'react'
import './css/styleComponent.css'

export default class Style extends Component {
  render() {
    let name = 'zhangsan'
    let style = {backgroundColor:'#FF4b00', fontSize:'26px'}
    return (
      <div>
        <div style={ style }>{ name }</div>
        <div style={{ color:'red', fontSize:'30px' }}>{ name }</div>
        <div className='style'>{ name }</div>
      </div> 
    )
  }
}

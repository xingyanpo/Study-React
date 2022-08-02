import React, { Component } from 'react'

export default class Tiem extends Component {
  render() {
    return (
      <div style={{display:'flex',paddingBottom: '20px', boxSizing: 'border-box'}}>
        <img src={this.props.poster} style={{width: '40%'}}></img>
        <div style={{padding:'5px',boxSizing: 'border-box'}}>
          <h4 >{this.props.name}<span style={{background:'#CCC',borderRadius:'4px', padding:'0 3px', marginLeft: '5px', color: '#666'}}>{this.props.filemType}</span></h4>
          {!!this.props.grade && <p>评分：{this.props.grade}分</p>}
          <p style={{fontSize:'14px'}}>{this.props.nation} | {this.props.runtime}分钟</p>
        </div>
      </div>
    )
  }
}

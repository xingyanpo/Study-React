import React, { Component } from 'react'
import axios from 'axios'

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

export default class Center extends Component {
  state = {
    lists: []
  }
  constructor() {
    super()
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9424449',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16590645011763431967358977","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res)
      this.setState({
        lists: res.data.data.films
      },() => {
        setTimeout(() => {
          // new BScroll('.wrapper-films')
        },0)
      })
    })
    
  }
  render() {
    return (
      <div>
        <div className='films'>
          <div className='wrapper-films' style={{height:'100vh'}}>
            <div className='content'>
            {
          this.state.lists.map((item, index) => 
            <Item infomation={item.synopsis} filemType={item.filmType.name} name={item.name} key={item.filmId} grade={item.grade} nation={item.nation} runtime={item.runtime} poster={item.poster}/>
          )
          }   
            </div>
          </div>
          <Detaile/>
        </div>

      </div>
    )
  }
}

class Detaile extends Component {
  constructor() {
    super()
    this.state = {
      info: ''
    }
    vessel.subscribe((info)=> {
      this.setState({
        info: info
      })
    })
  }
  render() {
    return (
      <div style={{width:'50%', height: '100%',background:'#FFF',position:'fixed', left: '0', top: '0'}}>{this.state.info}</div>
    )
  }
}

class Item extends Component {
  render() {
    return (
      <div style={{display:'flex',paddingBottom: '20px', boxSizing: 'border-box'}} onClick={()=> {
        vessel.sublish(this.props.infomation)
        console.log(this.props.infomation, this.props)
      }}>
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

import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'
import './css/tabbar.css'

export default class List extends Component {
  searchRef = React.createRef()
  state = {
    cinemaList:[],
    inputValue: ''
  }
  constructor() {
    super()
    // axios 请求
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=7481985',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16590645011763431967358977","bc":"310100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.setState({
        cinemaList: res.data.data.cinemas
      })
      setTimeout(() => {
        new BetterScroll(".wrapper")
      }, 0);
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='list-content'>
          <div className='head-search-wrap'>
            <input placeholder='输入影城名称' value={this.state.inputValue} onChange={(event) => {
              this.setState({
                inputValue: event.target.value
              }) 
            }}/>
            <button onClick={this.delSearchValue}>取消</button>
          </div>
          <ul className='tabbar-list'>
            {
              this.inputHandle().map(item=> 
                <li key={item.cinemaId}>
                  <div className='name'>{item.name}</div>
                  <div className='address'>{item.address}</div>
                </li> )
            }
          </ul>
        </div>
      </div>
    )
  }

  inputHandle = () => {
    return this.state.cinemaList.filter(item => {
      return item.name.toUpperCase().includes(this.state.inputValue.toUpperCase()) || (item.address.toUpperCase().includes(this.state.inputValue.toUpperCase()))
    })
  }

  delSearchValue = () => {
    this.setState({
      inputValue: ''
    }) 
  }
}


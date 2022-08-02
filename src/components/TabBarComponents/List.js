import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class List extends Component {
  searchRef = React.createRef()
  state = {
    cinemaList:[],
    backupCinemaList: []
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
        cinemaList: res.data.data.cinemas,
        backupCinemaList: res.data.data.cinemas
        
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
            <input ref={this.searchRef} onInput={this.inputHandle} placeholder='输入影城名称'/>
            <button onClick={this.delSearchValue}>取消</button>
          </div>
          <ul className='tabbar-list'>
            {
              this.state.cinemaList.map(item=> 
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
    let currectInput = this.searchRef.current.value
    let new_cinemaList = this.state.backupCinemaList.filter(item => {
      return item.name.toUpperCase().includes(currectInput.toUpperCase()) || (item.address.toUpperCase().includes(currectInput.toUpperCase()))
    })
    console.log(new_cinemaList)
    this.setState({
      cinemaList: new_cinemaList
    })
  }

  delSearchValue = () => {
    
  }
}

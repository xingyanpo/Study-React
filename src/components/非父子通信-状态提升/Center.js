import React, { Component } from 'react'
import Detaile from './Detaile'
import Item from './Item'
import axios from 'axios'
// import BScroll from 'better-scroll'

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
            <Item filemType={item.filmType.name} name={item.name} key={item.filmId} grade={item.grade} nation={item.nation} runtime={item.runtime} poster={item.poster}/>
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

import React, { Component } from 'react'
import axios from 'axios'
const GlobalContext = React.createContext()

export default class Context extends Component {
  constructor() {
    super()
    this.state = {
      lists: [],
      info: ''
    }
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
      }, () => {
        setTimeout(() => {
          // new BScroll('.wrapper-films')
        }, 0)
      })
    })

  }
  render() {
    return (
      <GlobalContext.Provider value={{
        tel:'111',
        infomation: this.state.info,
        changeInfomation: (value) => {
          this.setState({
            info: value
          })
        }
       }}>
      <div>
        <div className='films'>
          <div className='wrapper-films' style={{ height: '100vh' }}>
            <div className='content'>
              {
                this.state.lists.map((item, index) =>
                  <Item infomation={item.synopsis} filemType={item.filmType.name} name={item.name} key={item.filmId} grade={item.grade} nation={item.nation} runtime={item.runtime} poster={item.poster} />
                )
              }
            </div>
          </div>
          <Detaile />
        </div>
      </div>
      </GlobalContext.Provider>
    )
  }
}

class Detaile extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          return (
            <div style={{ width: '50%', height: '50%', background: '#FFF', position: 'fixed', left: '0', bottom: '0', boxShadow: '3px -3px 5px #DDD' }}>{value.infomation}</div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

class Item extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          return (
            <div style={{ display: 'flex', paddingBottom: '20px', boxSizing: 'border-box' }} onClick={() => {
              console.log(this.props.infomation)
              value.changeInfomation(this.props.infomation)
            }}>
              <img src={this.props.poster} style={{ width: '40%' }} alt={this.props.name}></img>
              <div style={{ padding: '5px', boxSizing: 'border-box' }}>
                <h4 >{this.props.name}<span style={{ background: '#CCC', borderRadius: '4px', padding: '0 3px', marginLeft: '5px', color: '#666' }}>{this.props.filemType}</span></h4>
                {!!this.props.grade && <p>评分：{this.props.grade}分</p>}
                <p style={{ fontSize: '14px' }}>{this.props.nation} | {this.props.runtime}分钟</p>
              </div>
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

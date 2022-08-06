import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    type: 1
  }
  tabpart = { flex: '1', cursor: 'pointer' }
  render() {
    console.log(this.state.type)
    return (
      <div>
        <div style={{ display: 'flex', textAlign: 'center', height: '40px', lineHeight: '40px', borderBottom: '1px solid #ccc' }}>
          <div style={{color:this.state.type === 1 ? '#ff4b00':'#333',...this.tabpart}} onClick={() => {
            this.setState({
              type: 1
            })
          }}>正在热映</div>
          <div  style={{color:this.state.type === 2 ? '#ff4b00':'#333',...this.tabpart}} onClick={() => {
            this.setState({
              type:2
            })
          }}>即将上映</div>
        </div>
        <Part type={this.state.type}></Part>
      </div>
    )
  }
}

class Part extends Component {
  state = {
    list: []
  }
  loadData = (props) => {
    if (props.type === 1) {
      axios({
        url:'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4453977',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16597710112470525318201345"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        method:'get'
      }).then((res) => {
        console.log(res)
        this.setState({
          list: res.data.data.films
        })
      })
    } else {
      axios({
        url:'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=643988',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16597710112470525318201345"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        method:'get'
      }).then((res) => {
        console.log(res)
        this.setState({
          list: res.data.data.films
        })
      })
    }
  }
  componentDidMount() {
    this.loadData(this.props)
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.loadData(nextProps)
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((item, index) => 
          <li key={item.filmId}>{item.name}</li>
          )
        }
      </div>
    )
  }
}

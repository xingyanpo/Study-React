import React, { Component } from 'react'
import './css/tabbar.css'
import Main from './TabBarComponents/Main'
import List from './TabBarComponents/List'
import Me from './TabBarComponents/Me'

export default class TabBar extends Component {
  state = {
    list: [{id: 1, value: '电影'}, {id: 2, value: '影院'}, {id: 3, value: '我的'}],
    currectId: 0
  }
  section () {
    switch(this.state.currectId) {
      case 0:
        return <Main/>
      case 1:
        return <List/>
      case 2:
        return <Me/>
      default:
        return null
    }
  }
  render() {
    return (
      <div>
        {this.section()}
        <ul className='tabbar'>
          {this.state.list.map((item, index) => <li onClick={() => this.setState({currectId: index})} className={this.state.currectId === index ? 'hover-tab' : ''} key={item.id}>{item.value}</li>)}
        </ul>
      </div>
    )
  }
}

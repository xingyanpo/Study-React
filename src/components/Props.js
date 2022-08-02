import React, { Component } from 'react'
import NavBarPart from './NavBar'
import SideBar from './SideBar'

export default class Props extends Component {
  render() {
    return (
      <div>
        <NavBarPart title='首页' leftshow={false}/>
        <NavBarPart title='购物车'centershow={false}/>
        <NavBarPart title='我的'/>
        <SideBar backgroundColor='red' position='right'/>
      </div>
    )
  }
}


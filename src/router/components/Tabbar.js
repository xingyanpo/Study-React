import React from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar() {
  return (
    <div className='main-tabbar'>
      <ul className='tabbar'>
        <li className='tabbar-item'><NavLink to='/main' activeClassName='tabbar-active'>首页</NavLink></li>
        <li className='tabbar-item'><NavLink to='/list' activeClassName='tabbar-active'>列表</NavLink></li>
        <li className='tabbar-item'><NavLink to='/me' activeClassName='tabbar-active'>我的</NavLink></li>
      </ul>
    </div>
  )
}

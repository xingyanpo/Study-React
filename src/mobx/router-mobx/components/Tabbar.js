import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'

export default function Tabbar() {
  console.log(style)
  return (
    <div className={style['main-tabbar']}>
      <ul className={style.tabbar}>
        <li className={style.tabbaritem}><NavLink to='/main' activeClassName={style.tabbaractive}>首页</NavLink></li>
        <li className={style.tabbaritem}><NavLink to='/cinemas' activeClassName={style.tabbaractive}>影院</NavLink></li>
        <li className={style.tabbaritem}><NavLink to='/list' activeClassName={style.tabbaractive}>列表</NavLink></li>
        <li className={style.tabbaritem}><NavLink to='/me' activeClassName={style.tabbaractive}>我的</NavLink></li>
      </ul>
    </div>
  )
}


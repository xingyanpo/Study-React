import React from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'

import Main from '../view/Main'
import List from '../view/List'
import Me from '../view/Me'
import NotFound from '../view/NotFound'
import Detail from '../view/Detail'

export default function MyRouter(props) {
  return (
    <HashRouter>
      {props.children}
      <Switch>
        <Route path='/main' component={Main}></Route>
        <Route path='/list' component={List}></Route>
        <Route path='/me' component={Me}></Route>
        {/* 方法一 */}
        <Route path='/detail/:detailid' component={Detail}></Route>
        {/* 方法二、三 */}
        {/* <Route path={'/detail'} component={Detail}></Route> */}

        <Redirect from='/' to='/main' exact></Redirect>

        <Route component={NotFound}></Route>
      </Switch>
    </HashRouter>
  )

}
import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Main from '../view/Main'
import List from '../view/List'
import Me from '../view/Me'
import NotFound from '../view/NotFound'
import Detail from '../view/Detail'
import Login from '../view/Login'
import Cinemas from '../view/Cinemas'
import City from '../view/City'

function isAuth () {
  console.log(!!localStorage.getItem('token'))
  return localStorage.getItem('token')
}

export default function MyRouter(props) {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route path='/main' component={Main}></Route>
        <Route path='/list' component={List}></Route>
        <Route path='/cinemas' component={Cinemas}></Route>
        <Route path='/city' component={City}></Route>
        <Route path='/me' render={() => {
          return isAuth() ? <Me/> : <Redirect to='/login' />
        }}></Route>
        <Route path='/login' render={() => {
          return isAuth() ? <Redirect to='/me' /> : <Login />
        }}></Route>
        {/* 方法一 */}
        <Route path='/detail/:detailid' component={Detail}></Route>
        {/* 方法二、三 */}
        {/* <Route path={'/detail'} component={Detail}></Route> */}

        <Redirect from='/' to='/main' exact></Redirect>

        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )

}
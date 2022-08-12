import React from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'

import Main from '../view/Main'
import List from '../view/List'
import Me from '../view/Me'
import NotFound from '../view/NotFound'

export default function MyRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/main' component={Main}></Route>
        <Route path='/list' component={List}></Route>
        <Route path='/me' component={Me}></Route>

        <Redirect from='/' to='/main' exact></Redirect>

        <Route component={NotFound}></Route>
      </Switch>
    </HashRouter>
  )

}
import React from 'react'
import {Route, HashRouter} from 'react-router-dom'

import Main from '../view/Main'
import List from '../view/List'
import Me from '../view/Me'

export default function MyRouter() {
  return (
    <HashRouter>
      <Route path='/main' component={Main}></Route>
      <Route path='/list' component={List}></Route>
      <Route path='/me' component={Me}></Route>
    </HashRouter>
  )

}
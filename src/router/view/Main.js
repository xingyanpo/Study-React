import React from 'react'
import Comingsoon from './main/Comingsoon'
import Nowplaying from './main/Nowplaying'

import {Route, Redirect, Switch, NavLink} from 'react-router-dom'

export default function Main() {
  return (
    <div>Main
      <div>
        <NavLink activeClassName='tabbar-active' to='/main/nowplaying'>正在热映</NavLink>
        <NavLink activeClassName='tabbar-active' to='/main/comingsoon'>即将上映</NavLink>
      </div>
      <Switch>
        <Route path='/main/nowplaying' component={Nowplaying}></Route>
        <Route path='/main/comingsoon' component={Comingsoon}></Route>
        <Redirect from='/main' to='/main/nowplaying'></Redirect>
      </Switch>
    </div>
  )
}

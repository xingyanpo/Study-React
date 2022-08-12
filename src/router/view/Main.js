import React from 'react'
import Comingsoon from './main/Comingsoon'
import Nowplaying from './main/Nowplaying'

import {Route, Redirect, Switch} from 'react-router-dom'

export default function Main() {
  return (
    <div>Main
      <Switch>
        <Route path='/main/nowplaying' component={Nowplaying}></Route>
        <Route path='/main/comingsoon' component={Comingsoon}></Route>
        <Redirect from='/main' to='/main/nowplaying'></Redirect>
      </Switch>
    </div>
  )
}

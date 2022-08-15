import React from 'react'
import Comingsoon from './main/Comingsoon'
import Nowplaying from './main/Nowplaying'

import {Route, Redirect, Switch, NavLink} from 'react-router-dom'

export default function Main() {
  return (
    <div>Main
      <div style={{fontSize:'26px', lineHeght:'1.5'}}>
        <NavLink style={{padding:'5px'}} to='/main/nowplaying'>热映中</NavLink>
        <NavLink style={{padding:'5px'}} to='/main/comingsoon'>要上映</NavLink>
      </div>
      <Switch>
        <Route path='/main/nowplaying' component={Nowplaying}></Route>
        <Route path='/main/comingsoon' component={Comingsoon}></Route>
        <Redirect from='/main' to='/main/nowplaying'></Redirect>
      </Switch>
    </div>
  )
}

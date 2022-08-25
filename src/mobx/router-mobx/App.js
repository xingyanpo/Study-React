import React, { useState, useEffect } from 'react'
import MyRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import store from './mobx/store'
import { Observer } from 'mobx-react'

export default function App() {
  return (
    <div>
      <Observer>
        {
          () => {
            return (
              <MyRouter>
                {store.isTabbarShow && <Tabbar></Tabbar>}
              </MyRouter>
            )
          }
        }
      </Observer>
    </div>
  )
}

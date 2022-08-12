import React from 'react'
import MyRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'

export default function App() {
  return (
    <div>
      
      <MyRouter>
        <Tabbar></Tabbar>
      </MyRouter>
    </div>
  )
}

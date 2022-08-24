import React, {useState, useEffect} from 'react'
import MyRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
// import store from './redux/store'
import store from './mobx/store'
import { autorun } from 'mobx'

export default function App() {
  const [tabbarisshow,setTabbarisshow] = useState(false)
  useEffect(() => {
    // store.subscribe(() => {
    //   console.log('app订阅', store.getState())
    //   setTabbarisshow(store.getState().TabbarReducer.show)
    // })

    autorun(() => {
      setTabbarisshow(store.isTabbarShow)
    })
  }, [])
  return (
    <div>
      <MyRouter>
        {tabbarisshow && <Tabbar></Tabbar>}
      </MyRouter>
    </div>
  )
}

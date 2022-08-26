import React, {useState, useEffect} from 'react'
import MyRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import store from './redux/store'
import  './util/request'

export default function App() {
  const [tabbarisshow,setTabbarisshow] = useState(store.getState().TabbarReducer.show)
  useEffect(() => {
    store.subscribe(() => {
      setTabbarisshow(store.getState().TabbarReducer.show)
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

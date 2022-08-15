import React, {useState, useEffect} from 'react'
import MyRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import store from './redux/store'

export default function App() {
  const [tabbarisshow,setTabbarisshow] = useState(store.getSate().show)
  useEffect(() => {
    store.subscribe(() => {
      console.log('app订阅', store.subscribe())
      setTabbarisshow(store.subscribe().show)
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

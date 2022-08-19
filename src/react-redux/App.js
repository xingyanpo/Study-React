import React, {useEffect} from 'react'
import MyRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
// import store from './redux/store'
import { connect } from 'react-redux'

function App(props) {
  useEffect(() => {
   console.log(props)
  }, [])
  return (
    <div>
      <MyRouter>
        {props.isShow && <Tabbar></Tabbar>}
      </MyRouter>
    </div>
  )
}

export default connect((state) => {
  console.log(state)
  return {
    a:1,
    b:2,
    isShow: state.TabbarReducer.show
  }
})(App)
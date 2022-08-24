import React,{useEffect} from 'react'
// import store from '../redux/store'
// import {show, hide} from '../redux/actionCreator/TabbarActionCreator'
import store from '../mobx/store'

export default function Detail(props) {
  useEffect(() => {
    // store.dispatch(hide())
    store.changeShow(false)
    return () => {
      // console.log('destory')
      // store.dispatch(show())
      store.changeShow(true)
    }
  }, [])
  return (
    <div>
      <div>detail-id: {props.match.params.detailid}</div>
      {/* <div> query传参: {props.location.query.myid}</div> */}
      {/* <div>state传参：{props.location.state.myid}</div> */} 
    </div>
  )
}

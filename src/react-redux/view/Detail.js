import React,{useEffect} from 'react'
// import store from '../redux/store'
import {show, hide} from '../redux/actionCreator/TabbarActionCreator'
import {connect} from 'react-redux'

 function Detail(props) {
  let {show, hide} = props
  console.log(props, props.match.params.detailid) // 方法一传参
  console.log(props) // 方法二、三传参
  useEffect(() => {
    // store.dispatch(hide())
    props.hide()
    return () => props.show()
  }, [show, hide])
  return (
    <div>
      <div>detail-id: {props.match.params.detailid}</div>
      {/* <div> query传参: {props.location.query.myid}</div> */}
      {/* <div>state传参：{props.location.state.myid}</div> */} 
    </div>
  )
}

export default connect(null, {
  show,
  hide
})(Detail)

import React from 'react'

export default function Detail(props) {
  console.log(props, props.match.params.detailid) // 方法一传参
  console.log(props) // 方法二、三传参
  return (
    <div>
      <div>detail-id: {props.match.params.detailid}</div>
      {/* <div> query传参: {props.location.query.myid}</div> */}
      {/* <div>state传参：{props.location.state.myid}</div> */} 
    </div>
  )
}

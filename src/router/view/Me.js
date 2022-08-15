import React, { useEffect } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

function Me(props) {
  useEffect(() => {
    axios({
      url:'/login/cellphone?phone=17634616135&password=xyp90925',
      method: 'get'
    }).then(res => {
      console.log(res)
    }).catch(res => {
      console.log(res)
    })
  },[])
  return (
    <div>
      <onclick onClick={() => {
        props.history.push('/order_detail')
      }}>查看订单</onclick>
      <div>

      </div>
    </div>
  )
}

export default withRouter(Me)
import React from 'react'
import {withRouter} from 'react-router-dom'

function Me(props) {
  return (
    <div>
      <onclick onClick={() => {
        props.history.push('/order_detail')
      }}>查看订单</onclick>
    </div>
  )
}

export default withRouter(Me)
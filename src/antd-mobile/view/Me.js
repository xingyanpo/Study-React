import React from 'react'
import {withRouter} from 'react-router-dom'

function Me(props) {
  return (
    <div>
      <button onClick={() => {
        props.history.push('/order_detail')
      }}>查看订单</button>
      <div>

      </div>
    </div>
  )
}

export default withRouter(Me)
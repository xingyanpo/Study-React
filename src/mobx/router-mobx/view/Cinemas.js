import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'

@inject('store')
@observer
class Cinemas extends Component {
  componentDidMount () {
    if (this.props.store.list.length === 0) {
      this.props.store.getList()
    }
  }
  render() {
    return (
      <div>
        <div>
          {
            this.props.store.list.map((item, index) => 
            <div key={item.name}>{item.name}</div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Cinemas

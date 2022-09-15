import React, { Component } from 'react'
import Dialog from './Dialog'
import { createPortal } from 'react-dom'

export default class PortalDialog extends Component {
  render() {
    {console.log(this.props)}
    return (
      createPortal(<div className='dialog'>
        <Dialog>
          <div style={{color: '#FFF'}}>啦啦啦啦啦</div>
          <button onClick={this.props.onClose}>close</button>
        </Dialog>
      </div>, document.body)
    )
  }
}

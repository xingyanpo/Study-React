import  Dialog  from './components/Dialog'
import React, { Component } from 'react'
import PortalDialog from './components/PortalDialog'

export default class App extends Component {
  state = {
    isshow: false
  }
  render() {
    return (
      <div>
        <div style={{width:'100vw', height: '100vh', display: 'flex'}}>
        <div style={{ width: '200px', background: 'red'}}></div>
        <div style={{ flex: '1', background: '#FF4b00'}}>
          <button onClick={() => {
            this.setState({
              isshow: true
            })
          }}>ajax</button>
          {this.state.isshow && <PortalDialog onClose={() => {
            this.setState({
              isshow: false
            })
          }}>
             <>哈哈哈哈</>
            </PortalDialog>}
        </div>
      </div>
      </div>
    )
  }
}

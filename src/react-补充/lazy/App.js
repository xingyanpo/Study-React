import React, { Component } from 'react'
import { Suspense } from 'react'
// import Comingsoon from './components/Comingsoon'
// import Playing from './components/Playing'
const Comingsoon = React.lazy(() => import('./components/Comingsoon'))
const Playing = React.lazy(() => import('./components/Playing'))

export default class App extends Component {
  state = {
    tab: 1
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={() => {
            this.setState({
              tab: 1
            })
          }}>正在热映</button>
          <button  onClick={() => {
            this.setState({
              tab: 2
            })
          }}>即将上映</button>
        </div>
        <Suspense fallback={ <div>正在加载中...</div>}>
        {this.state.tab === 1 ? <Comingsoon></Comingsoon> : <Playing></Playing>}
        </Suspense>
      </div>
    )
  }
}

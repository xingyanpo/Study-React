import React, { useEffect, useState } from 'react'
import Comingsoon from './main/Comingsoon'
import Nowplaying from './main/Nowplaying'
import axios from 'axios'
import { Tabs } from 'antd-mobile'

import { Route, Redirect, Switch } from 'react-router-dom'
import { Swiper } from 'antd-mobile'

export default function Main(props) {
  const [banners, setBanners] = useState([])
  useEffect(() => {
    axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E6%B5%B7&ci=10&channelId=4').then(res => {
      setBanners(res.data.data.hot)
    })
  }, [])
  return (
    <div>
      <Swiper>
        {
          banners.map((item, index) =>
            <Swiper.Item key={index}>
              <img src={item.img} alt={item.name} style={{ width: '100%', objectFit: 'cover', height: '200px' }}></img>
            </Swiper.Item>
          )
        }
      </Swiper>
      <div style={{position:'sticky', top:'0', zIndex:'1',background:'#FFF'}}>
        <Tabs activeKey={props.location.pathname} onChange={(value)=> {props.history.push(value)}}>
          <Tabs.Tab title='热映中' key='/main/nowplaying'></Tabs.Tab>
          <Tabs.Tab title='要上映' key='/main/comingsoon'></Tabs.Tab>
        </Tabs>
      </div>
      <Switch>
        <Route path='/main/nowplaying' component={Nowplaying}></Route>
        <Route path='/main/comingsoon' component={Comingsoon}></Route>
        <Redirect from='/main' to='/main/nowplaying'></Redirect>
      </Switch>
    </div>
  )
}

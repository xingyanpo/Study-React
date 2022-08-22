import React from 'react'
import { TabBar } from 'antd-mobile'
import style from './Tabbar.module.css'
import { withRouter } from 'react-router-dom'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
  FileOutline
} from 'antd-mobile-icons'

const tabs = [
  {
    key: '/main',
    title: '首页',
    icon: <AppOutline />
  },
  {
    key: '/cinemas',
    title: '影院',
    icon: <UnorderedListOutline />
  },
  {
    key: '/list',
    title: '表单',
    icon: <FileOutline />
  },
  {
    key: '/me',
    title: '我的',
    icon: <UserOutline />,
  },
]

function MyTabbar(props) {
  return (
    <div className={style['main-tabbar']}>
      <TabBar activeKey={'/' + props.location.pathname.split('/')[1]} onChange={(value)=> props.history.push(value)}>
        {tabs.map(item =>
          <TabBar.Item key={item.key} icon={item.icon} title={item.title}></TabBar.Item>
        )}
      </TabBar>
    </div>
  )
}

export default withRouter(MyTabbar)
import React from 'react'
import {createRoot} from 'react-dom/client'

// import App from './components/Class'
// import FuncApp from './components/Func'
// import NestComponent from './components/Nest'
// import Style from './components/Style'
// import EventBindComponent from './components/EventBind2'
// import Todolist from './components/Todolist'
// import TabBar from './components/TabBar'
// import SetState from './components/SetState'
// import Props from './components/Props'
// import List from './components/受控cinema'
// import App from './components/父子通信/fathter'
// import Login from './components/父子通信-ref表单域组件/Login'
// import Center from './components/非父子通信-状态提升/Center'
import Sublist from './components/非父子通信-发布订阅模式'

createRoot(document.getElementById('root')).render(<Sublist/>)
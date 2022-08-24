import React, { Component } from 'react'
import { observable, autorun } from 'mobx'

// 简单类型
var observableNum = observable.box(10)
autorun(() => {  // 只有更新的 observable 才会触发
  console.log('Num', observableNum.get())
})
setTimeout(() => {
  observableNum.set(20)
},2000)

// 对象类型
var observableObj = observable.map({
  name: 'zhangsan',
   age: 18
})
autorun(() => { 
  console.log('Obj', observableObj.get('name')) // map类型get必须填写get哪一个
})
setTimeout(() => {
  observableObj.set('name', 'lisi')
},2000)

// 简易写法
var observableObject = observable({
  name: '熊大',
   age: 18
})
autorun(() => {
  console.log('object', observableObject.name)
})
setTimeout(() => {
  observableObject.name = '熊二'
},2000)


export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

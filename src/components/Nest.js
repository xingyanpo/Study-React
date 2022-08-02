import React, { Component } from 'react'

// 类组件
class Swiper extends Component {
  render() {
    return (
      <div>Swiper</div>
    )
  }
}

// 函数组件
function Products () {
  return <div>Products</div>
}

// 箭头函数组件
const Blog = () => {
  return (
    <div>Blog</div>
  )
}

export default class NestComponent extends Component {
  render() {
    return (
      <div>
      <Swiper></Swiper>
      <Products></Products>
      <Blog></Blog>
      </div>
    )
  }
}

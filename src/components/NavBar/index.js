import React, { Component } from 'react'
import '../css/navbar.css'
import PropTypes from 'prop-types'

export default class NavBarPart extends Component {
  // 属性验证方法二：类static属性
  static propTypes = {
    title: PropTypes.string,  // PropTypes后面的数据类型都是小写
    leftshow: PropTypes.bool,
    centershow: PropTypes.bool,
    rightshow: PropTypes.bool
  }
  // 属性默认值方法二
  static defaultProps = {
    leftshow: true,
    centershow: true,
    rightshow: true
  }
  

  render() {
    let {title, leftshow, centershow, rightshow} = this.props
    return (
      <div className='navbar'>
        {leftshow && <div className='left-bar'>返回</div>}
        {centershow && <div className='center-bar'>{title}</div>}
        {rightshow && <button className='right-bar'>Home</button>}
      </div>
    )
  }
}

// 验证属性方法一：类属性
// NavBarPart.propTypes = {
//   title: PropTypes.string,  // PropTypes后面的数据类型都是小写
//   leftshow: PropTypes.bool,
//   centershow: PropTypes.bool,
//   rightshow: PropTypes.bool
// }

// 属性默认值方法一
// NavBarPart.defaultProps = {
//   leftshow: true,
//   centershow: true,
//   rightshow: true
// }

// this.prop 方法可以直接获取父组件传递过来的属性
// React预装插件 prop-types 可以用来验证传入的属性是否是指定类型，否则会报错
// propTypes = { } 用来验证父组件传递属性的类型
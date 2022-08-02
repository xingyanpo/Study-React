import React, { Component } from 'react'
import Input from './Input'

export default class Login extends Component {
  btn_style = {width:'100px',height:'40px', border:'none', margin:'10px', cursor: 'pointer'}
  loginRef = React.createRef()
  passwordRef = React.createRef()
  render() {
    return (
      <div style={{ margin:'0 auto' ,width:'300px'}}>
        <h1>登录系统</h1>
        <Input name='账号' type='text' ref={this.loginRef}/>
        <Input name='密码' type='password' ref={this.passwordRef}/>
        <button style={this.btn_style} onClick={() => {
          console.log(this.loginRef.current.state.value)
        }}>登录</button>
        <button style={this.btn_style} onClick={() => {
          this.loginRef.current.clearValue()
          this.passwordRef.current.clearValue()
        }}>取消</button>
      </div>
    )
  }
}

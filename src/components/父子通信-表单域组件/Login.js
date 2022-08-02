import React, { Component } from 'react'
import Input from './Input'

export default class Login extends Component {
  btn_style = {width:'100px',height:'40px', border:'none', margin:'10px', cursor: 'pointer'}
  state = {
    loginValue: '',
    passwordValue: ''
  }
  render() {
    return (
      <div style={{ margin:'0 auto' ,width:'300px'}}>
        <h1>登录系统</h1>
        <Input name='账号' type='text' value={this.state.loginValue} inputEvent={(value) => {
          this.setState({
            loginValue: value
          })
        }}/>
        <Input name='密码' type='password' value={this.state.passwordValue} inputEvent={(value) => {
          this.setState({
            passwordValue: value
          })
        }}/>
        <button style={this.btn_style} onClick={() => {
          console.log(this.state.loginValue, this.state.passwordValue, '登录请求已发送')
        }}>登录</button>
        <button style={this.btn_style} onClick={() => {
          this.setState({
            loginValue: '', 
            passwordValue: ''
          })
        }}>取消</button>
      </div>
    )
  }
}

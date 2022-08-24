import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Login(props) {
  const history = useHistory()
  return (
    <div>
      <input></input>
      <button onClick={() => {
        localStorage.setItem('token', '123')
        history.push('/me')
      }}>登录</button>
    </div>
  )
}

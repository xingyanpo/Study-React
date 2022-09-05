import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    const StyledDiv = styled.div`
      background: red;
      width:100px;
      height:100px;
      span {        // 支持sass写法
        color: #FFF;
      }
    `
    return (
      <StyledDiv>App
        <span>hhh</span>
      </StyledDiv>
    )
  }
}

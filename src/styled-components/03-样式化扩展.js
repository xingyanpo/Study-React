import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    const StyledButton = styled.button`
      border-radius: 5px;
      background: red;
      width: 100px; 
      height:36px;
      border: none;
    `
    const StyledButton2 = styled(StyledButton)`
      background: blue;
    `
    return (
      <div>
        <StyledButton>按钮</StyledButton>
        <StyledButton2>按钮</StyledButton2>
      </div>
    )
  }
}

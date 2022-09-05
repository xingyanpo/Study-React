import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'

export default class App extends Component {
  render() {
    const myanimation = keyframes`
      from {
        transform:rotate(0deg)
      }
      to {
        transform:rotate(360deg)
      }
    `
    const StyledDiv = styled.div`
      width:100px;
      height:100px;
      background:yellow;
      animation: ${myanimation} 1s infinite
    `
    return (
      <StyledDiv>App</StyledDiv>
    )
  }
}

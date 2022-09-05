import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    const StyledDiv = styled.div`
      background: ${props => props.bg || `yellow`};
      width: 100px;
      height: 100px;
    `
    return (
      <div>
        <StyledDiv bg='blue'></StyledDiv>
      </div>
    )
  }
}

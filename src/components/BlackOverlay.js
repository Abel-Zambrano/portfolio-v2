import React from "react"
import styled from "styled-components"

const StyledBlackOverlay = styled.div`
  display: -webkit-flex; /*Safari*/
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
`

const BlackOverlay = ({ children }) => {
  return <StyledBlackOverlay>{children}</StyledBlackOverlay>
}

export default BlackOverlay

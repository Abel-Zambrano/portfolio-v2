import React from "react"
import styled from "styled-components"

const StyledBlackOverlay = styled.div`
  display: -webkit-flex; /*Safari*/
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const BlackOverlay = ({ children }) => {
  return <StyledBlackOverlay>{children}</StyledBlackOverlay>
}

export default BlackOverlay

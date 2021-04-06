import React from "react"
import styled from "styled-components"

const StyledBackdrop = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

const Backdrop = ({ children }) => {
  return <StyledBackdrop>{children}</StyledBackdrop>
}

export default Backdrop

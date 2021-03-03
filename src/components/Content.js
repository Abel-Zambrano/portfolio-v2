import React from "react"
import styled from "styled-components"

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-dark);
  width: 100vw;
  height: 100vh;
  align-items: center;
  position: absolute;
`

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>
}

export default Content

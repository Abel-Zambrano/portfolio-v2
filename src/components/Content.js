import React from "react"
import styled from "styled-components"

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>
}

export default Content

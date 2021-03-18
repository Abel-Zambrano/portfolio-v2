import React from "react"
import styled from "styled-components"

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = ({ children, className }) => {
  return <StyledContent className={className}>{children}</StyledContent>
}

export default Content

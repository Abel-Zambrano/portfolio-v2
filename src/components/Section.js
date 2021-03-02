import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  background-color: var(--color-gray-light);
`

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section

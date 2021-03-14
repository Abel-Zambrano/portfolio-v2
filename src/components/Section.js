import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  margin: 24rem auto;
  width: 100%;
  height: 54rem;
  background-color: var(--color-gray-light);
`

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section

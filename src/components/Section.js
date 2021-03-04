import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  margin: 24rem auto;
  width: 98vw;
  height: 54rem;
`

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section

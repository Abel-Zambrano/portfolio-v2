import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  background-color: var(--color-gray-light);
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 24rem auto;
  width: 98vw;
  height: 50rem;
`

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section

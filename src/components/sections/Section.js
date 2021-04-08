import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  margin: 24rem auto;
  width: 100%;
  height: 54rem;
  background-color: var(--color-gray-light);
`

const Section = ({ children, id, className }) => {
  return (
    <StyledSection className={className} id={id}>
      {children}
    </StyledSection>
  )
}

export default Section

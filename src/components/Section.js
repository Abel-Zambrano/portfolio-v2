import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 24rem auto;
  width: 98vw;
  height: 54rem;
  text-align: center;
  background-color: var(--color-gray-light);
`

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section

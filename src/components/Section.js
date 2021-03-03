import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  background-color: var(--color-gray-light);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  margin: 24rem auto;
  width: 98vw;
  height: 54rem;
`

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section

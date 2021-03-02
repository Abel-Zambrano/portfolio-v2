import React from "react"

import styled from "styled-components"

const StyledTitle = styled.h1`
  margin: 6rem auto;
  font-size: 3rem;
  font-weight: 400;
  color: var(--color-white);
  text-transform: capitalize;
`

const CardTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default CardTitle

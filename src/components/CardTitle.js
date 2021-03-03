import React from "react"

import styled from "styled-components"

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: var(--color-primary);
  text-transform: capitalize;
`

const CardTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default CardTitle

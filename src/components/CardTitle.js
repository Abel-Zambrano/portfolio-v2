import React from "react"

import styled from "styled-components"

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: var(--color-primary-dark);
  text-transform: uppercase;
`

const CardTitle = ({ className, children }) => {
  return <StyledTitle className={className}>{children}</StyledTitle>
}

export default CardTitle

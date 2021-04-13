import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: var(--color-primary-dark);
  text-transform: uppercase;

  &.black-title {
    color: var(--color-jetblack);
    font-size: 2rem;
  }
`

const CardTitle = ({ style, className, title }) => {
  return (
    <StyledTitle style={style} className={className}>
      {title}
    </StyledTitle>
  )
}

export default CardTitle

import React from "react"
import styled from "styled-components"

import CardTitle from "./CardTitle"

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  min-height: 100%;
  width: 100%;
`

const StyledCardTitle = styled(CardTitle)`
  margin: 4rem auto;
`

const DisplayCard = ({ children, title, className }) => {
  return (
    <StyledExperience className={className}>
      <StyledCardTitle title={title} />
      {children}
    </StyledExperience>
  )
}

export default DisplayCard

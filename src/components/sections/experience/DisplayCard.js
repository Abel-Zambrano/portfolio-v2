import React from "react"
import styled from "styled-components"

import CardTitle from "../../CardTitle"
import ExpScreenshot from "./ExpScreenshot"

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`

const DisplayCard = ({ children, title }) => {
  return (
    <StyledExperience>
      <CardTitle title={title} />
      {children}
    </StyledExperience>
  )
}

export default DisplayCard

import React from "react"
import styled from "styled-components"
import data from "../../../JS/data"

import CardTitle from "../../CardTitle"
import ScreenShot from "./ScreenShot"
import ExperienceLink from "../../LinksOverImage"

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`

// ! need to update ExperinceLink Component

const Experience = () => {
  return (
    <StyledExperience>
      <CardTitle title={data[2].title} />
      <ScreenShot>
        <ExperienceLink title="an janitorial" />
      </ScreenShot>
    </StyledExperience>
  )
}

export default Experience

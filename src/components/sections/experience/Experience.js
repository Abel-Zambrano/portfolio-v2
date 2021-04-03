import React from "react"
import styled from "styled-components"
import CardTitle from "../../CardTitle"
import ScreenShot from "./ScreenShot"
import data from "../../../JS/data"

import ExperienceLink from "./ExperienceLink"

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`

const Experience = () => {
  return (
    <StyledExperience>
      <CardTitle title={data[2].title} />
      <ScreenShot>
        <ExperienceLink />
      </ScreenShot>
    </StyledExperience>
  )
}

export default Experience

import React from "react"
import styled from "styled-components"
import data from "../../../JS/data"

import CardTitle from "../../CardTitle"

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`

const Projects = () => {
  return (
    <StyledProjects>
      <CardTitle title={data[3].title} />
      <h1>HELLO</h1>
    </StyledProjects>
  )
}

export default Projects

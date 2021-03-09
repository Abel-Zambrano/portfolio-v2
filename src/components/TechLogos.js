import React from "react"
import styled from "styled-components"
import skillsData from "../JS/skills"

const StyledTechLogos = styled.ul`
  list-style: none;
`

const TechLogos = () => {
  return (
    <StyledTechLogos>
      {skillsData.map(skill => {
        return (
          <li>
            <img src={skill.logo} alt={skill.name} />
            {skill.name}
          </li>
        )
      })}
    </StyledTechLogos>
  )
}

export default TechLogos

import React from "react"
import styled from "styled-components"
import skillsData from "../JS/skills"

const StyledTechLogos = styled.ul`
  display: grid;
  grid-column: auto auto;
  list-style: none;
`

const Icon = styled.div``

const IconText = styled.p``

const TechLogos = () => {
  return (
    <StyledTechLogos>
      {skillsData.map(skill => {
        const { logo, name } = skill
        return (
          <li>
            <Icon>{logo}</Icon>
            <IconText>{name}</IconText>
          </li>
        )
      })}
    </StyledTechLogos>
  )
}

export default TechLogos

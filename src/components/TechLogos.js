import React from "react"
import styled from "styled-components"
import { IconName } from "react-icons/si"
import skillsData from "../JS/skills"

const StyledTechLogos = styled.ul`
  list-style: none;
  text-transform: uppercase;
  color: var(--color-pink);
`

const TechLogos = () => {
  return (
    <StyledTechLogos>
      {/* {skillsData.logos.map(logo => {
        return <li>{logo}</li>
      })} */}
    </StyledTechLogos>
  )
}

export default TechLogos

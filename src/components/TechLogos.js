import React from "react"
import styled from "styled-components"
import { SiMercedes } from "@react-icons/all-files/si/SiMercedes"
import skillsData from "../JS/skills"

const StyledTechLogos = styled.ul`
  list-style: none;
  text-transform: uppercase;
  color: var(--color-pink);
`

const TechLogos = () => {
  return (
    <StyledTechLogos>
      <SiMercedes />
      {skillsData.map(logo => {
        return <li key={logo.id}>{logo.name}</li>
      })}
    </StyledTechLogos>
  )
}

export default TechLogos

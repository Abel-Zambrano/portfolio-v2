import React from "react"
import styled from "styled-components"
import skillsData from "../JS/skills"

const StyledTechLogos = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 3rem;
  list-style: none;
  color: var(--color-primary-dark);
`

const Icon = styled.div`
  font-size: 4rem;
`

const TechLogos = () => {
  return (
    <StyledTechLogos>
      {skillsData.map(skill => {
        const { id, logo } = skill
        return (
          <li>
            <Icon key={id}>{logo}</Icon>
          </li>
        )
      })}
    </StyledTechLogos>
  )
}

export default TechLogos

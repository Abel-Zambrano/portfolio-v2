import React from "react"
import styled from "styled-components"
import skillsData from "../JS/skills"

const StyledTechLogos = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 3rem;
  list-style: none;
  color: var(--color-white);
`

const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: var(--color-primary-dark);
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  position: relative;
`

const TechLogos = () => {
  return (
    <StyledTechLogos>
      {skillsData.map(skill => {
        const { id, logo } = skill
        return (
          <li>
            <IconBackground>
              <Icon key={id}>{logo}</Icon>
            </IconBackground>
          </li>
        )
      })}
    </StyledTechLogos>
  )
}

export default TechLogos

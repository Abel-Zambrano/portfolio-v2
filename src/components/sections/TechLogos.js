import React from "react"
import styled from "styled-components"
import skillsData from "../../JS/skills"

const StyledTechLogos = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 3rem;
  list-style: none;
  color: var(--color-white);
  margin: auto;

  @media screen and (max-width: 1000px) {
    margin: 2rem auto;
  }

  @media screen and (max-width: 490px) {
    grid-template-columns: auto auto auto;
    grid-gap: 2rem;
  }

  .list-item {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 10rem;
  }

  .icon-background {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background-color: var(--color-primary-dark);
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    position: relative;
  }
`

const TechLogos = () => {
  return (
    <StyledTechLogos>
      {skillsData.map(skill => {
        const { id, logo } = skill
        return (
          <li className="list-item" key={id}>
            <div className="icon-background">
              <div className="icon">{logo}</div>
            </div>
          </li>
        )
      })}
    </StyledTechLogos>
  )
}

export default TechLogos

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
    width: 20rem;
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

    &-name {
      color: var(--color-gray-dark);
      margin-top: 1.4rem;
      font-size: 1.2rem;
      text-transform: uppercase;
    }
  }
`

const TechLogos = () => {
  return (
    <StyledTechLogos>
      {skillsData.map(skill => {
        const { id, logo, name } = skill
        return (
          <li className="list-item" key={id}>
            <div className="icon-container">
              <div className="icon-background">
                <div className="icon">{logo}</div>
              </div>
              <p className="icon-name">{name}</p>
            </div>
          </li>
        )
      })}
    </StyledTechLogos>
  )
}

export default TechLogos

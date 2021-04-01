import React from "react"
import styled from "styled-components"
import skillsData from "../../JS/skills"

const frontEndSkills = skillsData.slice(0, 8)

const techName = frontEndSkills.map(skill => {
  return skill.name
})

const newTechName = techName.join(", ")

const backEndSkills = skillsData.slice(8, 13)

const bTechName = backEndSkills.map(skill => {
  return skill.name
})

const newBTechName = bTechName.join(", ")

const TechTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 490px) {
    display: none;
  }

  .text {
    max-width: 58rem;
    line-height: 2rem;
    font-size: 1.52rem;
    font-weight: 700;
    color: var(--color-jetblack);
    text-align: start;

    @media screen and (max-width: 1000px) {
      text-align: center;
      margin-top: 1.6rem;
    }
  }

  .styled-text {
    font-family: "Roboto Mono", monospace;
    color: var(--color-primary-dark);
    font-size: 1.7rem;
    text-transform: uppercase;
    text-align: right;
  }
`

const TechText = () => {
  return (
    <TechTextWrapper>
      <p className="text">
        Front-End Skills
        <br />
        <span className="styled-text">{newTechName}</span>
      </p>
      <p className="text">
        Back-End Skills
        <br />
        <span className="styled-text">{newBTechName}</span>
      </p>
    </TechTextWrapper>
  )
}

export default TechText

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
`

const Text = styled.p`
  max-width: 58rem;
  line-height: 2rem;
  font-size: 1.52rem;
  font-weight: 700;
  color: var(--color-jetblack);
  text-align: start;
`
const Span = styled.span`
  font-family: "Roboto Mono", monospace;
  color: var(--color-primary-dark);
  font-size: 1.7rem;
  text-transform: uppercase;
  text-align: right;
`

const SpanContainer = styled.div``

const TechText = () => {
  return (
    <TechTextWrapper>
      <Text>
        Front-End Skills
        <SpanContainer>
          <Span>{newTechName}</Span>
        </SpanContainer>
      </Text>
      <Text>
        Back-End Skills
        <SpanContainer>
          <Span>{newBTechName}</Span>
        </SpanContainer>
      </Text>
    </TechTextWrapper>
  )
}

export default TechText

import React from "react"
import styled from "styled-components"
import skillsData from "../JS/skills"

const frontEndSkills = skillsData.slice(0, 9)

const fName = frontEndSkills.map(skill => {
  return skill.name
})

console.log(frontEndSkills[0].name)

console.log(frontEndSkills)

const TechTextWrapper = styled.div``

const Text = styled.p`
  max-width: 58rem;
  line-height: 2rem;
  font-size: 1.52rem;
  color: var(--color-jetblack);
  margin: 1rem auto;
`
const Span = styled.span`
  font-family: "Roboto Mono", monospace;
  color: var(--color-primary-dark);
`

const TechText = () => {
  return (
    <TechTextWrapper>
      <Text>
        Front-End Skills: <Span>{fName}</Span>
      </Text>
      <Text>
        Back-End Skills: <Span></Span>
      </Text>
    </TechTextWrapper>
  )
}

export default TechText

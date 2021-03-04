import React from "react"
import styled from "styled-components"

import CardTitle from "./CardTitle"

import skillsData from "../JS/skills"

const SkillsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`
const TechWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const TechText = styled.p``

const TechLogos = styled.div``

const Skills = () => {
  return (
    <SkillsWrapper>
      <CardTitle>{skillsData.title}</CardTitle>
      <TechWrapper>
        <TechText>text</TechText>
        <TechLogos>logos</TechLogos>
      </TechWrapper>
    </SkillsWrapper>
  )
}

export default Skills

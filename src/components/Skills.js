import React from "react"
import styled from "styled-components"
import CardTitle from "./CardTitle"
import TechLogos from "./TechLogos"
import data from "../JS/data"

const SkillsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`
const Skills = () => {
  return (
    <SkillsWrapper>
      <CardTitle>{data[1].title}</CardTitle>
      <TechLogos />
    </SkillsWrapper>
  )
}

export default Skills

import React from "react"
import styled from "styled-components"
import CardTitle from "./CardTitle"
import TechText from "./TechText"
import TechLogos from "./TechLogos"
import data from "../JS/data"

const SkillsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`
const Content = styled.div`
  width: 100rem;
  display: flex;
  justify-content: space-evenly;
`

const Skills = () => {
  return (
    <SkillsWrapper>
      <CardTitle>{data[1].title}</CardTitle>
      <Content>
        <TechText />
        <TechLogos />
      </Content>
    </SkillsWrapper>
  )
}

export default Skills

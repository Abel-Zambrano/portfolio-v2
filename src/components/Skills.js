import React from "react"
import styled from "styled-components"
import CardTitle from "./CardTitle"
import TechText from "./TechText"
import TechLogos from "./TechLogos"
import data from "../JS/data"

const SkillsWrapper = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`
const Skills = () => {
  return (
    <>
      <CardTitle>{data[1].title}</CardTitle>
      <SkillsWrapper>
        <TechText />
        <TechLogos />
      </SkillsWrapper>
    </>
  )
}

export default Skills

import React from "react"
import styled from "styled-components"
import CardTitle from "../CardTitle"
import TechText from "./TechText"
import TechLogos from "./TechLogos"
import data from "../../JS/data"

const SkillsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;

  .content {
    width: 100rem;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      width: 50rem;
    }
  }
`

const Skills = () => {
  return (
    <SkillsWrapper>
      <CardTitle title={data[1].title} />
      <div className="content">
        <TechText />
        <TechLogos />
      </div>
    </SkillsWrapper>
  )
}

export default Skills

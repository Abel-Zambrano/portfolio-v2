import React from "react"
import styled from "styled-components"
import CardTitle from "../CardTitle"
import TechLogos from "./TechLogos"
import data from "../../JS/data"

const SkillsWrapper = styled.article`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  min-height: 50rem;
  width: 100%;

  .content {
    padding: 6rem 0;
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
        <TechLogos />
      </div>
    </SkillsWrapper>
  )
}

export default Skills

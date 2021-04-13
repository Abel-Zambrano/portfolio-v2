import React from "react"
import styled from "styled-components"
import CardTitle from "../../CardTitle"
import Avatar from "../about/Avatar"
import data from "../../../JS/data"
import Interests from "./Interests"

const AboutWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;

  .text {
    max-width: 60rem;
    line-height: 2rem;
    font-size: 1.52rem;
    color: var(--color-jetblack);
  }

  .span-focus {
    color: var(--color-primary-dark);
  }

  .int-title {
    font-size: 2rem;
    color: var(--color-gray-dark);
  }
`

const About = () => {
  return (
    <AboutWrapper>
      <CardTitle title={data[0].title} />
      <Avatar />
      <p className="text">
        {data[0].infoStart}
        <span className="span-focus">{data[0].infoSpan}</span>
        {data[0].infoEnd}
      </p>
      {/* <h1 className="int-title">INTERESTS</h1>
      <Interests /> */}
    </AboutWrapper>
  )
}

export default About

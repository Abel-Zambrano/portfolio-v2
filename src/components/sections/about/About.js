import React from "react"
import styled from "styled-components"
import CardTitle from "../../CardTitle"
import Avatar from "../about/Avatar"
import data from "../../../JS/data"

const AboutWrapper = styled.article`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 50rem;
  width: 100%;

  .text {
    max-width: 60rem;
    line-height: 2rem;
    font-size: 1.52rem;
    color: var(--color-jetblack);
    padding: 0 4rem;
    line-height: 2.5rem;
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
    </AboutWrapper>
  )
}

export default About

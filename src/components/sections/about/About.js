import React from "react"
import styled from "styled-components"
import CardTitle from "../../CardTitle"
import Avatar from "../about/Avatar"
import data from "../../../JS/data"

const AboutWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`

const Text = styled.p`
  max-width: 58rem;
  line-height: 2rem;
  font-size: 1.52rem;
  color: var(--color-jetblack);
`

const SpanFocus = styled.span`
  color: var(--color-primary-dark);
`

const About = () => {
  return (
    <AboutWrapper>
      <CardTitle title={data[0].title} />
      <Avatar />
      <Text>
        {data[0].infoStart}
        <SpanFocus>{data[0].infoSpan}</SpanFocus>
        {data[0].infoEnd}
      </Text>
    </AboutWrapper>
  )
}

export default About

import React from "react"
import styled from "styled-components"

import CardTitle from "./CardTitle"
import Avatar from "./Avatar"

import aboutData from "../JS/about"

const AboutWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
      <CardTitle>{aboutData.title}</CardTitle>
      <Avatar />
      <Text>
        {aboutData.infoStart}
        <SpanFocus>{aboutData.infoSpan}</SpanFocus>
        {aboutData.infoEnd}
      </Text>
    </AboutWrapper>
  )
}

export default About

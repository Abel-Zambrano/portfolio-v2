import React from "react"
import styled from "styled-components"

import CardTitle from "./CardTitle"
import Avatar from "./Avatar"

import aboutData from "../JS/about"

const StyledAbout = styled.article`
  margin: 20rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.p`
  font-size: 1.2rem;
  color: var(--color-white);
`

const SpanFocus = styled.span`
  color: var(--color-primary);
`

const About = () => {
  return (
    <StyledAbout>
      <CardTitle>{aboutData.title}</CardTitle>
      <Avatar />
      <Text>
        {aboutData.infoStart}
        <SpanFocus>{aboutData.infoSpan}</SpanFocus>
        {aboutData.infoEnd}
      </Text>
    </StyledAbout>
  )
}

export default About

import React from "react"
import styled from "styled-components"

import CardTitle from "./CardTitle"
import Avatar from "./Avatar"

import aboutData from "../JS/about"

const Text = styled.p`
  line-height: 2rem;
  max-width: 58rem;
  font-size: 1.52rem;
  color: var(--color-white);
`

const SpanFocus = styled.span`
  color: var(--color-primary);
`

const About = () => {
  return (
    <>
      <CardTitle>{aboutData.title}</CardTitle>
      <Avatar />
      <Text>
        {aboutData.infoStart}
        <SpanFocus>{aboutData.infoSpan}</SpanFocus>
        {aboutData.infoEnd}
      </Text>
    </>
  )
}

export default About

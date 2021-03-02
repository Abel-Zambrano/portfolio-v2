import React from "react"
import styled from "styled-components"

import CardTitle from "./CardTitle"

import aboutData from "../JS/about"

const StyledBio = styled.article`
  margin: 20rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.p`
  font-size: 1.2rem;
  color: var(--color-white);
`

const Bio = () => {
  return (
    <StyledBio>
      <CardTitle>{aboutData.title}</CardTitle>
      <Text>{aboutData.info}</Text>
    </StyledBio>
  )
}

export default Bio

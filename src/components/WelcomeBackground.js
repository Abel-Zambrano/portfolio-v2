import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 70vh;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`

const WelcomeBackground = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "forest.jpg" }) {
        childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const imageData = data.file.childImageSharp.fluid

  return (
    <StyledBackgroundImage fluid={imageData}>
      <h2>Background Image</h2>
    </StyledBackgroundImage>
  )
}

export default WelcomeBackground

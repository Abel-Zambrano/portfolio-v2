import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  opacity: 1 !important;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.2) 10%,
    rgba(0, 0, 0, 0.9) 90%
  );
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

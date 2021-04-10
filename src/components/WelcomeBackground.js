import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 84vh;
  background-attachment: fixed;
`

const WelcomeBackground = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "forest.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 95, fit: CONTAIN, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData = data.file.childImageSharp.fluid

  return (
    <StyledBackgroundImage fluid={imageData}>{children}</StyledBackgroundImage>
  )
}

export default WelcomeBackground

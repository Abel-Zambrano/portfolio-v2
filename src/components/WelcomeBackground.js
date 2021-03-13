import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 84vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const WelcomeBackground = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "forest.jpg" }) {
        childImageSharp {
          fluid(quality: 95) {
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

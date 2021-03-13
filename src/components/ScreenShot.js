import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const ProjectImage = styled(BackgroundImage)`
  width: 100%;
  height: 84vh;
`

const ScreenShot = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "anJanitorial.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData = data.file.childImageSharp.fluid

  return <BackgroundImage fluid={imageData}>{children}</BackgroundImage>
}

export default ScreenShot

import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 80rem;
  height: 40rem;
  background-repeat: no-repeat;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 760px) {
    width: 36rem;
    height: 18rem;
  }
`

const ScreenShot = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "anJanitorial.png" }) {
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

export default ScreenShot

import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledScreenShot = styled.div`
  width: 100rem;
  object-fit: fill;

  @media screen and (max-width: 1000px) {
    width: 70rem;
  }

  @media screen and (max-width: 760px) {
    width: 50rem;
  }

  @media screen and (max-width: 490px) {
    width: 36rem;
  }
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

  return (
    <StyledScreenShot>
      <Image fluid={imageData}>{children}</Image>
    </StyledScreenShot>
  )
}

export default ScreenShot

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const BackgroundWrapper = styled.div``

const StyledImage = styled(Image)`
  max-height: 70vh;
`

const WelcomeBackground = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "forest.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <BackgroundWrapper>
      <StyledImage fluid={data.file.childImageSharp.fluid} />
    </BackgroundWrapper>
  )
}

export default WelcomeBackground

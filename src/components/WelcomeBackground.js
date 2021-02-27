import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const BackgroundWrapper = styled.div`
  height: 70vh;
  width: 100vw;
`

const StyledImg = styled(Img)``

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
  return (
    <BackgroundWrapper>
      <StyledImg
        style={{ height: "100%", width: "100%" }}
        imgStyle={{ objectFit: "conatin" }}
        fluid={data.file.childImageSharp.fluid}
      />
    </BackgroundWrapper>
  )
}

export default WelcomeBackground

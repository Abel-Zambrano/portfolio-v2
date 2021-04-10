import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const StyledBgImage = styled(BgImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 84vh;
  background-attachment: fixed;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  /* @media screen and (max-width: 600px) {
    max-width: 100rem;
    min-height: 90vh;
  } */
`

const WelcomeBackground = ({ children }) => {
  const { forestBackground } = useStaticQuery(
    graphql`
      query {
        forestBackground: file(relativePath: { eq: "forest.jpg" }) {
          childImageSharp {
            gatsbyImageData(quality: 95, webpOptions: { quality: 70 })
          }
        }
      }
    `
  )

  const pluginImage = getImage(forestBackground)

  return <StyledBgImage image={pluginImage}>{children}</StyledBgImage>
}

export default WelcomeBackground

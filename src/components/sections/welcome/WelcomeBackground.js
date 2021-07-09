import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const StyledBgImage = styled(BgImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  height: 84vh;
  filter: brightness(60%);
  background-attachment: fixed;

  /* @media screen and (max-width: 560px) {
    background-attachment: scroll;
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

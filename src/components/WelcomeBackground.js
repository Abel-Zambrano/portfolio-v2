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
`

const WelcomeBackground = ({ children }) => {
  const { forestBackground } = useStaticQuery(
    graphql`
      query {
        forestBackground: file(relativePath: { eq: "forest.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 95
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(forestBackground)

  return <StyledBgImage image={pluginImage}>{children}</StyledBgImage>
}

export default WelcomeBackground

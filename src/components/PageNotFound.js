import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100vw;
  height: 100vh;
`

const PageNotFound = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulWallpaper {
        nodes {
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  const {
    allContentfulWallpaper: { nodes: pic },
  } = data

  return <StyledBackgroundImage fluid={pic[0].image.fluid} />
}

export default PageNotFound

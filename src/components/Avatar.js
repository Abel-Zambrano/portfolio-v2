import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const StyledImage = styled(Image)`
  border-radius: 50%;
  max-width: 24rem;
  max-height: 24rem;
`

const Avatar = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "azPic.jpeg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <StyledImage fixed={data.file.childImageSharp.fixed} />
}

export default Avatar

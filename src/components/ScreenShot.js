import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

// const Wrapper = styled.div`
//   width: 50rem;
//   object-fit: fill;
// `

const ProjectImage = styled(Image)`
  width: 10rem;
  height: 10rem;
`

const ScreenShot = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "anJanitorial.png" }) {
        childImageSharp {
          fixed(height: 420, width: 800) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const imageData = data.file.childImageSharp.fixed

  return <ProjectImage fixed={imageData}>{children}</ProjectImage>
}

export default ScreenShot

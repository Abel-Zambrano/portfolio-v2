import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const HandshakeImage = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "handshake.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData = data.file.childImageSharp.fluid

  return <Image className={className} fluid={imageData} />
}

export default HandshakeImage

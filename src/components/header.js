import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import NavLinks from "./NavLinks"

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-jetblack);
`

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-white);
  text-transform: uppercase;
`

const Header = props => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "AZ_logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Title>
        <Img
          style={{ width: "8rem" }}
          fluid={data.file.childImageSharp.fluid}
        />
        <h1>Abel Zambrano</h1>
      </Title>
      <NavLinks />
    </StyledHeader>
  )
}

export default Header

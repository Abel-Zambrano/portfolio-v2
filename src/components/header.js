import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Links from "../constants/links"

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

const Nav = styled(Links)`
  color: var(--color-white);
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
      <Nav />
    </StyledHeader>
  )
}

export default Header

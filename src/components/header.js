import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  /* display: flex; */
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-primary);
`

const NavLinks = styled.div`
  color: blue;
`
const query = graphql`
  {
    file(relativePath: { eq: "AZ_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(query)

  console.log(data)

  return (
    <StyledHeader>
      <Title>
        <Img fluid={data.file.childImageSharp.fluid} />
        <h1>Abel Zambrano</h1>
      </Title>
      <NavLinks>Nav Links</NavLinks>
    </StyledHeader>
  )
}

export default Header

import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Image from "gatsby-image"
import NavLinks from "./NavLinks"
import CardTitle from "./CardTitle"

const StyledHeader = styled.div`
  background-color: var(--color-jetblack);
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2.2rem;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: var(--color-white);
  text-transform: uppercase;
`

const Name = styled.h1`
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
      <HeaderContainer>
        <Title>
          <Image
            style={{ width: "8rem" }}
            fluid={data.file.childImageSharp.fluid}
          />
          <Name>abel zambrano</Name>
        </Title>
        <NavLinks />
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header

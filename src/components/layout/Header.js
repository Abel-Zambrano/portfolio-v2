import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Image from "gatsby-image"
import NavLinks from "../navigation/NavLinks"

const StyledHeader = styled.div`
  background-color: var(--color-jetblack);

  .header-container {
    display: flex;
    justify-content: space-around;
    margin: 0 2.2rem;
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: var(--color-white);
    text-transform: uppercase;
  }

  .name {
    font-weight: 200;
  }
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
      <div className="header-container">
        <div className="title">
          <Image
            style={{ width: "8rem" }}
            fluid={data.file.childImageSharp.fluid}
          />
          <h1 className="name">abel zambrano</h1>
        </div>
        <NavLinks />
      </div>
    </StyledHeader>
  )
}

export default Header

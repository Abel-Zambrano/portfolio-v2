import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Image from "gatsby-image"
import NavLinks from "../navigation/NavLinks"
import MobileNavLinks from "../navigation/MobileNavLinks"
import Hamburger from "../navigation/Hamburger"

const StyledHeader = styled.div`
  background-color: var(--color-jetblack);

  .header-container {
    display: flex;
    justify-content: space-around;
    margin: 0 2.2rem;
    align-items: center;
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: var(--color-white);
    text-transform: uppercase;

    @media screen and (max-width: 490px) {
      font-size: 0.8rem;
    }
  }

  .name {
    font-weight: 200;
  }
`

const Header = props => {
  const [showNav, setShowNav] = useState(false)

  const showNavHandler = () => {
    setShowNav(!showNav)
  }

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
            className="logo-image"
            style={{ width: "8rem" }}
            fluid={data.file.childImageSharp.fluid}
          />
          <h1 className="name">abel zambrano</h1>
        </div>
        <NavLinks />
        <Hamburger open={showNav} onClick={showNavHandler} />
      </div>
      <MobileNavLinks open={showNav} />
    </StyledHeader>
  )
}

export default Header

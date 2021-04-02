import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { debounce } from "../../utilities/helpers"

import Image from "gatsby-image"
import NavLinks from "../navigation/NavLinks"
import MobileNavLinks from "../navigation/MobileNavLinks"
import Hamburger from "../navigation/Hamburger"

const StyledHeader = styled.div`
  background-color: transparent;
  position: fixed;
  width: 100%;
  height: 8rem;
  z-index: 20;
  /* transition: top 0.6s; */
  transition: 0.6s;

  &.active {
    background-color: var(--color-jetblack);
  }

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
  const [showNav, setShowNav] = useState(false) // show mobile navbar
  const [prevScroll, setPrevScroll] = useState(0)
  const [visible, setVisible] = useState(true) // show desktop navbar
  const [navColor, setNavColor] = useState(false) // change navbar from transparent to black

  // toggle for mobile navbar
  const showNavHandler = () => {
    setShowNav(!showNav)
  }

  const scrollHandler = debounce(() => {
    // find current scroll position
    const currentScroll = window.pageYOffset

    // set vivible state based on scroll position
    setVisible(
      (prevScroll > currentScroll && prevScroll - currentScroll > 70) ||
        currentScroll < 20
    )

    // set state based to new scroll postion
    setPrevScroll(currentScroll)
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    // cleanup
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [prevScroll, visible, scrollHandler])

  const navColorHandler = () => {
    if (window.scrollY > 80) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
    console.log(window.scrollY)
  }

  window.addEventListener("scroll", navColorHandler)

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
    <StyledHeader
      className={navColor ? "active" : null}
      style={{ top: visible ? "0" : "-100px" }}
    >
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
      <MobileNavLinks open={showNav && visible} />
    </StyledHeader>
  )
}

export default Header

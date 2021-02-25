import React from "react"
import styled from "styled-components"
import links from "../constants/links"

const StyledNav = styled.ul`
  display: flex;
`

const NavLink = () => {
  console.log(links)

  return (
    <>
      <StyledNav></StyledNav>
    </>
  )
}

export default NavLink

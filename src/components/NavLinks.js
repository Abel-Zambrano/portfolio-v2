import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import links from "../constants/links"

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Li = styled.li`
  list-style: none;
  margin: 0 1.2rem;
`

const StyledLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  font-size: 1.8rem;
  text-transform: uppercase;

  &:hover {
    color: var(--color-primary);
  }
`

const NavLink = () => {
  return (
    <>
      <StyledNav>
        {links.map(link => {
          return (
            <Li key={link.id}>
              <StyledLink to={link.url}>{link.text}</StyledLink>
            </Li>
          )
        })}
      </StyledNav>
    </>
  )
}

export default NavLink

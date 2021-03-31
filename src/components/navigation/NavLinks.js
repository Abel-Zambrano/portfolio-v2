import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import links from "../../constants/links"

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }

  .list-item {
    list-style: none;
    margin: 0 1.2rem;
  }

  .link {
    color: var(--color-white);
    text-decoration: none;
    font-size: 1.8rem;
    text-transform: uppercase;

    &:hover {
      color: var(--color-primary);
    }
  }
`

const activeStyles = {
  borderBottom: "0.2rem solid var(--color-primary-light)",
}

const NavLink = () => {
  return (
    <>
      <StyledNav>
        {links.map(link => {
          return (
            <li className="list-item" key={link.id}>
              <Link className="link" to={link.url} activeStyle={activeStyles}>
                {link.text}
              </Link>
            </li>
          )
        })}
      </StyledNav>
    </>
  )
}

export default NavLink

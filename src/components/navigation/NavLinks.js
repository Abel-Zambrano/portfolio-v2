import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import links from "../../JS/links"

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
    transition: color 200ms ease-in;

    @media screen and (max-width: 1035px) {
      font-size: 1.4rem;
    }

    &:hover {
      color: var(--color-primary);
    }
  }
`

const NavLink = () => {
  return (
    <>
      <StyledNav>
        {links.map(link => {
          return (
            <li className="list-item" key={link.id}>
              <Link className="link" to={link.url}>
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

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import links from "../../constants/links"

const StyledMobileNavLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
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

const MobileNavLinks = () => {
  return (
    <>
      <StyledMobileNavLinks>
        {links.map(link => {
          return (
            <li className="list-item" key={link.id}>
              <Link className="link" to={link.url}>
                {link.text}
              </Link>
            </li>
          )
        })}
      </StyledMobileNavLinks>
    </>
  )
}

export default MobileNavLinks

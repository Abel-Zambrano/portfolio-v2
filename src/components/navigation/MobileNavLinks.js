import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import links from "../../constants/links"

const StyledMobileNavLinks = styled.ul`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 24rem;
    transition: transform 0.3s ease-in-out;
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

const MobileNavLinks = ({ open }) => {
  return (
    <>
      <StyledMobileNavLinks>
        {links.map(link => {
          return (
            <li className="list-item" key={link.id}>
              <Link className="link" to={link.url} activeStyle={activeStyles}>
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

import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`

const NavLinks = styled.div`
  color: blue;
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo>Abel Zambrano</Logo>
      <NavLinks>Nav Links</NavLinks>
    </StyledHeader>
  )
}

export default Header

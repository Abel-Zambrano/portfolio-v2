import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`

const NavLinks = styled.div`
  color: blue;
`

const Header = () => {
  return (
    <StyledHeader>
      <Title>
        <h1>Abel Zambrano</h1>
      </Title>
      <NavLinks>Nav Links</NavLinks>
    </StyledHeader>
  )
}

export default Header

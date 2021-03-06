import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  margin-top: 6rem;
  margin-bottom: 6rem;
  text-align: center;
  color: var(--caolo-gray-light);
  opacity: 0.3;
`

const Footer = () => {
  return <StyledFooter>&copy; Abel Zambrano 2021</StyledFooter>
}

export default Footer

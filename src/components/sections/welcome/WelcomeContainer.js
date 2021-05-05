import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  text-align: center;
`

const WelcomeContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default WelcomeContainer

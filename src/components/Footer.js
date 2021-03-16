import React from "react"
import styled from "styled-components"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 20rem;
  width: 100%;
  margin-top: 6rem;
  text-align: center;
  background-color: var(--color-jetblack);
`

const IconContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;
`

const LinkedIn = styled(FaLinkedinIn)`
  font-size: 4rem;
  color: var(--color-gray-light);
  background-color: var(--color-gray-dark);
  margin: 0.2rem;
  padding: 0.5rem 0.5rem;
  transition: 0.2s;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-linkedin);
    transform: scale(1.1);
  }
`

const Github = styled(FaGithub)`
  font-size: 4rem;
  color: var(--color-gray-light);
  background-color: var(--color-gray-dark);
  margin: 0.2rem;
  padding: 0.5rem 0.5rem;
  transition: 0.2s;

  &:hover {
    color: var(--color-jetblack);
    background-color: var(--color-white);
    transform: scale(1.1);
  }
`

const Text = styled.p`
  font-size: 1.52rem;
  color: var(--color-white);
`

const Footer = () => {
  return (
    <StyledFooter>
      <IconContainer>
        <a
          href="https://www.linkedin.com/in/abel-zambrano/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/Abel-Zambrano"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </IconContainer>
      <Text>&copy; Abel Zambrano 2021</Text>
    </StyledFooter>
  )
}

export default Footer

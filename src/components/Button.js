import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  text-transform: uppercase;
  font-size: 2rem;
  padding: 2rem 6rem;
  color: var(--color-primary-dark);
  border: 0.2rem solid var(--color-primary-dark);
  transition: 0.2s;
  background-color: transparent;

  &:hover {
    color: var(--color-primary);
    border: 0.2rem solid var(--color-primary);
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 10rem rgba(0, 0, 0, 0.2);
  }
`

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}

export default Button

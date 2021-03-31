import React from "react"
import styled from "styled-components"

const StyledHamburger = styled.button`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    color: var(--color-primary-light);
    justify-content: space-around;
    width: 2rem;
    height: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    &:focus {
      outline: none;
    }

    div {
      width: 4rem;
      height: 0.25rem;
      background: var(--color-white);
      border-radius: 1rem;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 0.1rem;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(34deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-34deg)" : "rotate(0)")};
      }
    }
  }
`

const Hamburger = ({ onClick, open }) => {
  return (
    <StyledHamburger open={open} onClick={onClick}>
      <div />
      <div />
      <div />
    </StyledHamburger>
  )
}

export default Hamburger

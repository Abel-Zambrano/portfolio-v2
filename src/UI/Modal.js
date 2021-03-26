import React from "react"
import styled from "styled-components"

import Backdrop from "./Backdrop"
import SuccessCheck from "./SuccessCheck"

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-white);
  width: 60rem;
  height: 40rem;
  top: 20%;
  text-align: center;
  position: absolute;
`
const TextDiv = styled.div``

const LargeText = styled.h1`
  color: var(--color-gray-dark);
  font-weight: 200;
  font-size: 3rem;
  margin: 1rem auto;
`

const MeduimText = styled.h2`
  color: var(--color-gray-dark);
  font-weight: 200;
  margin: 1rem auto;
`

const Button = styled.button`
  background-color: var(--color-white);
  color: var(--color-green);
  font-size: 2.8rem;
  font-weight: 200;
  border: 0.2rem solid var(--color-green);
  width: 30%;
  height: 6rem;

  &:hover {
    background-color: var(--color-green);
    color: var(--color-white);
  }
`

const Modal = ({ ClassName, largeText, meduimText, btnText, cancel }) => {
  return (
    <Backdrop>
      <StyledModal>
        <SuccessCheck />
        <TextDiv>
          <LargeText>{largeText}</LargeText>
          <MeduimText>{meduimText}</MeduimText>
        </TextDiv>
        <Button onClick={cancel}>{btnText}</Button>
      </StyledModal>
    </Backdrop>
  )
}

export default Modal

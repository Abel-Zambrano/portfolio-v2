import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"

const textAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
`

const smallTextAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`

const WelcomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
`

const Text1 = styled.h1`
  visibility: hidden;
  color: var(--color-white);
  font-size: 5rem;
  font-weight: 200;
  line-height: 8rem;
  animation: ${textAnimation} 2s ease-in-out;
  animation-fill-mode: forwards;

  @media screen and (max-width: 490px) {
    font-size: 2.5rem;
  }
`

const Text2 = styled.h1`
  visibility: hidden;
  color: var(--color-white);
  font-size: 5rem;
  font-weight: 200;
  line-height: 8rem;
  animation: ${textAnimation} 2s ease-in-out 1.5s;
  animation-fill-mode: forwards;

  @media screen and (max-width: 490px) {
    font-size: 2.5rem;
  }
`

const SmallText = styled.p`
  font-family: "Roboto Mono", monospace;
  visibility: hidden;
  color: var(--color-white);
  font-size: 2rem;
  line-height: 8rem;
  animation: ${smallTextAnimation} 1s ease-out 3s;
  animation-fill-mode: forwards;

  @media screen and (max-width: 490px) {
    font-size: 1.5rem;
  }
`

const WelcomeText = () => {
  const [welcome, setWelcome] = useState("")

  const today = new Date().getHours()

  const time = () => {
    if (today < 12) {
      setWelcome("Good Morning")
    } else if (today < 18) {
      setWelcome("Good Afternoon")
    } else {
      setWelcome("Good Evening")
    }
  }

  useEffect(() => {
    time()
  })

  return (
    <WelcomeTextWrapper>
      <Text1>{`${welcome}, I'm Abel!`}</Text1>
      <Text2>Welcome to My Portfolio</Text2>
      <SmallText>Frontend Developer / UI</SmallText>
    </WelcomeTextWrapper>
  )
}

export default WelcomeText

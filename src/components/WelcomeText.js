import React, { useState, useEffect } from "react"
import styled from "styled-components"

const WelcomeTextWrapper = styled.div``

const Text = styled.h1`
  color: var(--color-white);
  font-size: 5rem;
  font-weight: 200;
  line-height: 8rem;
`

const SmallText = styled.p`
  color: var(--color-white);
  font-size: 2rem;
  line-height: 8rem;
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
      <Text>{`${welcome}, I'm Abel!`}</Text>
      <Text>Welcome to my Portfolio</Text>
      <SmallText>Front-End Developer/UI</SmallText>
    </WelcomeTextWrapper>
  )
}

export default WelcomeText

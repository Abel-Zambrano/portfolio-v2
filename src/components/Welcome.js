import React, { useState, useEffect } from "react"
import styled from "styled-components"

const WelcomeWrapper = styled.div``

const Text = styled.p``

const SmallText = styled.p``

const Welcome = () => {
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
    <WelcomeWrapper>
      <Text>{`${welcome}, I'm Abel!`}</Text>
      <Text>Welcome to my Portfolio!</Text>
      <SmallText>Front-End Developer/UI</SmallText>
    </WelcomeWrapper>
  )
}

export default Welcome

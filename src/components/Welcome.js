import React from "react"
import styled from "styled-components"

const today = new Date().getHours()

if (today < 12) {
  console.log("Good Morning")
} else if (today < 18) {
  console.log("Good Afternoon")
} else {
  console.log("Good Evening")
}

const WelcomeWrapper = styled.div``

const Text = styled.p``

const SmallText = styled.p``

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Text>{`${today}, I'm Abel!`}</Text>
      <Text>Welcome to my Portfolio!</Text>
      <SmallText>Front-End Developer/UI</SmallText>
    </WelcomeWrapper>
  )
}

export default Welcome

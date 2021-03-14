import React from "react"
import styled from "styled-components"
import CardTitle from "./CardTitle"
import data from "../JS/data"
import { SiMinutemailer } from "@react-icons/all-files/si/SiMinutemailer"

const Div = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`

const Title = styled(CardTitle)``

const LogoContainer = styled.div``

const Mail = styled(SiMinutemailer)`
  font-size: 10rem;
  color: var(--color---color-jetblack);
`

const Text = styled.p`
  max-width: 58rem;
  line-height: 2rem;
  font-size: 1.52rem;
  color: var(--color-jetblack);
`

const Contact = () => {
  return (
    <Div>
      <CardTitle>{data[3].title}</CardTitle>
      <Mail />
      <Text>{data[3].text}</Text>
    </Div>
  )
}

export default Contact

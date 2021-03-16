import React from "react"
import { Link } from "gatsby"
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

const Button = styled.button`
  text-transform: uppercase;
  font-size: 2rem;
  padding: 3rem 6rem;
  color: var(--color-primary-dark);
  border: 2px solid var(--color-primary-dark);
  transition: 0.2s;

  &:hover {
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 10rem rgba(0, 0, 0, 0.2);
  }
`

const Contact = () => {
  return (
    <Div>
      <CardTitle>{data[3].title}</CardTitle>
      <Mail />
      <Text>{data[3].text}</Text>
      <Link to="/connect/">
        <Button>connect</Button>
      </Link>
    </Div>
  )
}

export default Contact

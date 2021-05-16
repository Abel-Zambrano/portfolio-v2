import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import data from "../../JS/data"
import { SiMinutemailer } from "@react-icons/all-files/si/SiMinutemailer"

import CardTitle from "../CardTitle"
import Button from "../Button"

const Div = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 50rem;
  width: 100%;
`

const IconBackground = styled.div`
  background-color: var(--color-primary-dark);
  border-radius: 50%;
  padding: 3rem 3rem;
  text-align: center;
`

const Mail = styled(SiMinutemailer)`
  font-size: 10rem;
  color: var(--color-white);
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
      <CardTitle title={data[4].title} />
      <IconBackground>
        <Mail />
      </IconBackground>
      <Text>{data[4].text}</Text>
      <Link to="/connect/">
        <Button text="connect" />
      </Link>
    </Div>
  )
}

export default Contact

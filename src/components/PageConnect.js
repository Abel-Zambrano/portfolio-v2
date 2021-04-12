import React, { useContext } from "react"
import { MessageContext } from "../context/MessageContext"
import styled from "styled-components"

import Form from "./Form"
import CardTitle from "./CardTitle"
import Modal from "../UI/Modal"

const StyledCardTitle = styled(CardTitle)`
  @media screen and (max-width: 490px) {
    font-size: 2rem;
    margin: 2rem auto;
  }
`

const PageConnect = () => {
  const [message, setMessage] = useContext(MessageContext)

  const messageHandler = () => {
    setMessage(!message)
  }

  return (
    <>
      <StyledCardTitle title="Contact Form" />
      <Form />
      {message ? (
        <Modal
          largeText="Thank You!"
          meduimText="Your message was delivered. We will be in touch soon."
          btnText="OK"
          cancel={messageHandler}
        />
      ) : null}
    </>
  )
}

export default PageConnect

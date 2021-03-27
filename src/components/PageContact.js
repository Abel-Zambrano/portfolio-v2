import React, { useContext } from "react"
import { MessageContext } from "../context/MessageContext"

import Form from "./Form"
import CardTitle from "./CardTitle"
import Modal from "../UI/Modal"

const PageContact = () => {
  const [message, setMessage] = useContext(MessageContext)

  const messageHandler = () => {
    setMessage(!message)
  }

  return (
    <>
      <CardTitle title="Contact Form" />
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

export default PageContact

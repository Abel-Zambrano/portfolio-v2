import React, { useState } from "react"

import Form from "../components/Form"
import CardTitle from "../components/CardTitle"
import Modal from "../UI/Modal"

const PageConnect = () => {
  const [showSucces, setShowSuccess] = useState(true)
  return (
    <>
      <CardTitle title="Contact Form" />
      <Form />
      {showSucces ? (
        <Modal
          largeText="Thank You!"
          meduimText="Your message was delivered. We will be in touch soon."
          btnText="OK"
        />
      ) : null}
    </>
  )
}

export default PageConnect

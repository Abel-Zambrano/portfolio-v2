import React, { useState } from "react"

import Form from "../components/Form"
import CardTitle from "../components/CardTitle"
import Modal from "../UI/Modal"

const PageConnect = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const showSuccessHandler = () => {
    setShowSuccess(!showSuccess)
  }

  return (
    <>
      <CardTitle title="Contact Form" />
      <Form formClicked={showSuccessHandler} />
      {console.log(showSuccess)}

      {showSuccess ? (
        <Modal
          largeText="Thank You!"
          meduimText="Your message was delivered. We will be in touch soon."
          btnText="OK"
          cancel={showSuccessHandler}
        />
      ) : null}
    </>
  )
}

export default PageConnect

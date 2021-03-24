import React, { useState } from "react"
import styled from "styled-components"
import GlobalStyles from "../globalStyles"

import Layout from "../components/Layout"
import Form from "../components/Form"
import CardTitle from "../components/CardTitle"
import Modal from "../UI/Modal"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-light);
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
  width: 100%;
`

const connect = () => {
  const [connect, setConnect] = useState(false)

  const connectHandler = () => {}

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Div>
          <CardTitle title="contact form" />
          {connect ? (
            <Modal
              largeText="Thank You!"
              meduimText="Your message was delivered. We will be in touch soon."
              btnText="OK"
            />
          ) : (
            <Form />
          )}
        </Div>
      </Layout>
    </>
  )
}

export default connect

import React from "react"
import styled from "styled-components"
import GlobalStyles from "../globalStyles"

import Layout from "../components/Layout"
import Form from "../components/Form"
import CardTitle from "../components/CardTitle"
import Success from "../UI/Success"

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
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Div>
          <CardTitle title="contact form" />
          <Form />
          <Success />
        </Div>
      </Layout>
    </>
  )
}

export default connect

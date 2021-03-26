import React from "react"
import styled from "styled-components"
import GlobalStyles from "../globalStyles"
import { MessageProvider } from "../context/MessageContext"

import Layout from "../components/Layout"
import PageConnect from "../components/PageConnect"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-gray-light);
  height: 100rem;
`

const connect = () => {
  return (
    <MessageProvider>
      <GlobalStyles />
      <Layout>
        <Div>
          <PageConnect />
        </Div>
      </Layout>
    </MessageProvider>
  )
}

export default connect

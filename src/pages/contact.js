import React from "react"
import styled from "styled-components"
import GlobalStyles from "../globalStyles"
import { MessageProvider } from "../context/MessageContext"

import Layout from "../components/Layout"
import PageContact from "../components/PageContact"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-gray-light);
  height: 100rem;
`

const contact = () => {
  return (
    <MessageProvider>
      <GlobalStyles />
      <Layout>
        <Div>
          <PageContact />
        </Div>
      </Layout>
    </MessageProvider>
  )
}

export default contact

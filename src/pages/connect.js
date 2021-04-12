import React from "react"
import styled from "styled-components"
import GlobalStyles from "../globalStyles"
import { MessageProvider } from "../context/MessageContext"

import Layout from "../components/layout/Layout"
import PageConnect from "../components/PageConnect"

const StyledConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-gray-light);
  height: 100rem;

  @media screen and (max-width: 490px) {
    justify-content: center;
  }
`

const Connect = () => {
  return (
    <MessageProvider>
      <GlobalStyles />
      <Layout id="light-page">
        <StyledConnect>
          <PageConnect />
        </StyledConnect>
      </Layout>
    </MessageProvider>
  )
}

export default Connect

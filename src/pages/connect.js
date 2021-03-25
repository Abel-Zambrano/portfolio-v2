import React from "react"
import styled from "styled-components"
import GlobalStyles from "../globalStyles"

import Layout from "../components/Layout"
import PageConnect from "../components/PageConnect"

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
          <PageConnect />
        </Div>
      </Layout>
    </>
  )
}

export default connect

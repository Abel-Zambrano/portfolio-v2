import React from "react"
import styled from "styled-components"

import GlobalStyles from "../globalStyles"
import Layout from "../components/Layout"
import About from "../components/About"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-gray-light);
  height: 100rem;
`

const Container = styled.div`
  height: 50rem;
`

const about = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Div>
          <Container>
            <About />
          </Container>
        </Div>
      </Layout>
    </>
  )
}

export default about

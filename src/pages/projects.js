import React from "react"
import styled from "styled-components"

import GlobalStyles from "../globalStyles"
import Layout from "../components/Layout"
import Projects from "../components/Projects"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-gray-light);
  height: 100rem;
`

const projects = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Div>
          <Projects />
        </Div>
      </Layout>
    </>
  )
}

export default projects

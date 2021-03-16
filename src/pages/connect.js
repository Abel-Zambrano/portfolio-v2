import React from "react"
import GlobalStyles from "../globalStyles"
import Layout from "../components/Layout"
import Content from "../components/Content"

const connect = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Content>
          <h1>Connect page</h1>
        </Content>
      </Layout>
    </>
  )
}

export default connect

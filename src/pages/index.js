import React from "react"
import GlobalStyles from "../globalStyles"
import Welcome from "../components/Welcome"

import Layout from "../components/Layout"

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Layout>
      <p>index page</p>
      <Welcome />
    </Layout>
  </>
)
export default IndexPage

import React from "react"
import GlobalStyles from "../globalStyles"
import Welcome from "../components/Welcome"

import Layout from "../components/Layout"

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Layout>
      <Welcome />
    </Layout>
  </>
)
export default IndexPage

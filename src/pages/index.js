import React from "react"
import GlobalStyles from "../globalStyles"
import WelcomeBackground from "../components/WelcomeBackground"

import Layout from "../components/Layout"

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Layout>
      <WelcomeBackground />
    </Layout>
  </>
)
export default IndexPage

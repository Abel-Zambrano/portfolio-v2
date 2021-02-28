import React from "react"
import GlobalStyles from "../globalStyles"

import Layout from "../components/Layout"
import WelcomeBackground from "../components/WelcomeBackground"
import BlackOverlay from "../components/BlackOverlay"

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Layout>
      <WelcomeBackground>
        <BlackOverlay></BlackOverlay>
      </WelcomeBackground>
    </Layout>
  </>
)
export default IndexPage

import React from "react"
import GlobalStyles from "../globalStyles"

import Layout from "../components/Layout"
import WelcomeBackground from "../components/WelcomeBackground"
import BlackOverlay from "../components/BlackOverlay"
import WelcomeText from "../components/WelcomeText"
import Section from "../components/Section"
import Content from "../components/Content"
import Bio from "../components/Bio"

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Layout>
      <WelcomeBackground>
        <BlackOverlay>
          <WelcomeText />
        </BlackOverlay>
        <Content>
          <Section>
            <Bio />
          </Section>
        </Content>
      </WelcomeBackground>
    </Layout>
  </>
)
export default IndexPage

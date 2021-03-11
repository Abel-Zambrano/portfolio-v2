import React from "react"
import GlobalStyles from "../globalStyles"

import Layout from "../components/Layout"
import WelcomeBackground from "../components/WelcomeBackground"
import BlackOverlay from "../components/BlackOverlay"
import WelcomeText from "../components/WelcomeText"
import Section from "../components/Section"
import Content from "../components/Content"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const IndexPage = () => (
  <>
    <GlobalStyles />
    <Layout>
      <WelcomeBackground>
        <BlackOverlay>
          <WelcomeText />
        </BlackOverlay>
      </WelcomeBackground>
      <Content>
        <Section>
          <About />
        </Section>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Projects />
        </Section>
      </Content>
    </Layout>
  </>
)
export default IndexPage

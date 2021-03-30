import React from "react"
import GlobalStyles from "../globalStyles"

import Layout from "../components/layout/Layout"
import WelcomeBackground from "../components/WelcomeBackground"
import BlackOverlay from "../components/BlackOverlay"
import WelcomeText from "../components/WelcomeText"
import Section from "../components/sections/Section"
import Content from "../components/sections/Content"
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"

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
        <Section id="about">
          <About />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Content>
    </Layout>
  </>
)
export default IndexPage

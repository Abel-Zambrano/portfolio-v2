import React from "react"
import GlobalStyles from "../globalStyles"
import data from "../JS/data"

import Layout from "../components/layout/Layout"
import WelcomeBackground from "../components/WelcomeBackground"
import BlackOverlay from "../components/BlackOverlay"
import WelcomeText from "../components/WelcomeText"
import Section from "../components/sections/Section"
import Content from "../components/sections/Content"
import About from "../components/sections/about/About"
import Skills from "../components/sections/Skills"
import DisplayCard from "../components/sections/experience/DisplayCard"
import Contact from "../components/sections/Contact"
import CardTitle from "../components/CardTitle"
import ExpScreenshot from "../components/sections/experience/ExpScreenshot"

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
        <Section id={data[2].title}>
          <DisplayCard title={data[2].title}>
            <ExpScreenshot />
          </DisplayCard>
        </Section>
        <Section id={data[3].title}>
          <DisplayCard title={data[3].title}></DisplayCard>
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Content>
    </Layout>
  </>
)
export default IndexPage

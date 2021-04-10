import React from "react"
import { Helmet } from "react-helmet"
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
import DisplayCard from "../components/DisplayCard"
import Contact from "../components/sections/Contact"
import ExperienceList from "../components/sections/experience/ExperienceList"
import ProjectList from "../components/sections/projects/ProjectList"
import SectionImages from "../components/sections/SectionImages"

const IndexPage = () => (
  <>
    <Helmet>
      <title>AZ | Web Dev</title>
    </Helmet>
    <GlobalStyles />
    <Layout>
      <WelcomeBackground>{/* <WelcomeText /> */}</WelcomeBackground>
      <Content>
        <Section id="about">
          <About />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <SectionImages id={data[2].title}>
          <DisplayCard title={data[2].title}>
            <ExperienceList />
          </DisplayCard>
        </SectionImages>
        <SectionImages id={data[3].title}>
          <DisplayCard title={data[3].title}>
            <ProjectList />
          </DisplayCard>
        </SectionImages>
        <Section id="contact">
          <Contact />
        </Section>
      </Content>
    </Layout>
  </>
)
export default IndexPage

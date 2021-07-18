import React from "react"
import { Helmet } from "react-helmet"
import GlobalStyles from "../globalStyles"
import data from "../JS/data"
import Layout from "../components/layout/Layout"
import WelcomeBackground from "../components/sections/welcome/WelcomeBackground"
import WelcomeText from "../components/sections/welcome/WelcomeText"
import Section from "../components/sections/Section"
import Content from "../components/sections/Content"
import About from "../components/sections/about/About"
import Skills from "../components/sections/Skills"
import DisplayCard from "../components/DisplayCard"
import Contact from "../components/sections/Contact"
import ExperienceList from "../components/sections/experience/ExperienceList"
import SectionImages from "../components/sections/SectionImages"
import WelcomeContainer from "../components/sections/welcome/WelcomeContainer"

const IndexPage = () => (
  <>
    <Helmet>
      <title>AZ | Web Dev</title>
    </Helmet>
    <GlobalStyles />
    <Layout>
      <WelcomeContainer>
        <WelcomeBackground />
        <WelcomeText />
      </WelcomeContainer>
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
        <Section id="contact">
          <Contact />
        </Section>
      </Content>
    </Layout>
  </>
)
export default IndexPage

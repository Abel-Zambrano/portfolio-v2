import React from "react"
import GlobalStyles from "../globalStyles"
import Layout from "../components/layout/Layout"
import Content from "../components/sections/Content"
import SectionImages from "../components/sections/SectionImages"
import DisplayCard from "../components/DisplayCard"
import PortfolioList from "../components/PortfolioList"

const Legacy = () => {
  return (
    <div>
      <GlobalStyles />
      <Layout id="light-page">
        <Content>
          <SectionImages id="legacy">
            <DisplayCard title="Legacy Portfolios">
              <PortfolioList />
            </DisplayCard>
          </SectionImages>
        </Content>
      </Layout>
    </div>
  )
}

export default Legacy

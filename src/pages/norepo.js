import React from "react"
import styled from "styled-components"
import GlobalStyles from "../globalStyles"

import Layout from "../components/layout/Layout"
import DisplayCard from "../components/DisplayCard"

const Text = styled.p``

const norepo = () => {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        <DisplayCard title="No Repo Available">
          <Text>
            The Github Repo is either unavailable due to NDA or it was developed
            with WordPress.
          </Text>
        </DisplayCard>
      </Layout>
    </div>
  )
}

export default norepo

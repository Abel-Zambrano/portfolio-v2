import React from "react"
import styled from "styled-components"
import GlobalStyles from "../globalStyles"

import Layout from "../components/layout/Layout"
import PageNotFound from "../components/PageNotFound"

const StyledNotFoundPage = styled.div`
  height: 100vh;
`

const NotFoundPage = () => (
  <>
    <GlobalStyles />
    <Layout id="light-page">
      <StyledNotFoundPage>
        <PageNotFound />
      </StyledNotFoundPage>
    </Layout>
  </>
)

export default NotFoundPage

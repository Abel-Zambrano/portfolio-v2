import React from "react"
import styled from "styled-components"
import GlobalStyles from "../globalStyles"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import DisplayCard from "../components/DisplayCard"
import Button from "../components/Button"

const StyledNoRepo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray-light);
  height: 100rem;

  .text-container {
    max-width: 120rem;
    padding: auto 6rem;
  }

  .text {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }
`

const StyledDisplayCard = styled(DisplayCard)`
  justify-content: center;
`

const norepo = () => {
  return (
    <StyledNoRepo>
      <GlobalStyles />
      <Layout id="light-page">
        <StyledDisplayCard>
          <div className="text-container">
            <p className="text">
              The Github Repo is either unavailable due to NDA or it was
              developed with WordPress.
            </p>
            <Link to="/#experience">
              <Button text="Return to Experience" />
            </Link>
          </div>
        </StyledDisplayCard>
      </Layout>
    </StyledNoRepo>
  )
}

export default norepo

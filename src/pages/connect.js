import React from "react"
import styled from "styled-components"
import GlobalStyles from "../globalStyles"

import Layout from "../components/Layout"
import Content from "../components/Content"
import HandshakeImage from "../components/HandshakeImage"
import Form from "../components/Form"

const StyledContent = styled(Content)`
  background-color: var(--color-gray-light);
  height: 90vh;
`

const Div = styled.div`
  display: flex;
`

const LeftContent = styled.div`
  height: 70vh;
`

const StyledImage = styled(HandshakeImage)`
  height: 100%;
  width: 40rem;
`

const RightContent = styled.div``

const connect = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <StyledContent>
          <Div>
            <LeftContent>
              <StyledImage />
            </LeftContent>
            <RightContent>
              <Form />
            </RightContent>
          </Div>
        </StyledContent>
      </Layout>
    </>
  )
}

export default connect

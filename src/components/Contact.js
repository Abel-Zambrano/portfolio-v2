import React from "react"
import styled from "styled-components"
import CardTitle from "./CardTitle"
import data from "../JS/data"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`

const Title = styled(CardTitle)``

const Contact = () => {
  return (
    <Div>
      <CardTitle>{data[3].title}</CardTitle>
    </Div>
  )
}

export default Contact

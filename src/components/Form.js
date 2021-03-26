import React, { useState } from "react"
import styled from "styled-components"
import emailjs from "emailjs-com"

import Button from "./Button"

const StyledForm = styled.form`
  background-color: var(--color-white);
  width: 60rem;
  height: 60rem;
  padding: 4rem 2rem;
  font-size: 1.2rem;
  box-shadow: 1rem 1rem 2rem 0.2rem rgba(0, 0, 0, 0.2);
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  text-transform: uppercase;
`

const Input = styled.input`
  margin-top: 0.6rem;
  margin-bottom: 2rem;
  height: 2.5rem;
  font-size: 1.4rem;
  border: 0;
  border-bottom: 2px solid var(--color-primary);
  background: transparent;
`

const LabelRequired = styled(Label)`
  &:after {
    content: "*";
    color: red;
    margin-left: 0.5rem;
  }
`

const TextArea = styled.textarea`
  margin-top: 0.6rem;
  margin-bottom: 8rem;
  font-family: inherit;
  font-size: 1.4rem;
  height: 20rem;
  border: 0;
  border-bottom: 2px solid var(--color-primary);
`

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const sendEmail = e => {
  e.preventDefault()
  emailjs
    .sendForm(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      e.target,
      process.env.USER_ID
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text)
      },
      function (error) {
        console.log("FAILED...", error)
      }
    )
  e.target.reset()
}

const Form = ({ formClicked }) => {
  return (
    <>
      <StyledForm method="post" onSubmit={sendEmail}>
        <Column>
          <Row>
            <NameDiv>
              <LabelRequired for="fname">first name</LabelRequired>
              <Input type="text" name="fname" required />
            </NameDiv>
            <NameDiv>
              <Label for="lname">last name</Label>
              <Input type="text" name="lname" />
            </NameDiv>
          </Row>
          <LabelRequired for="email">email</LabelRequired>
          <Input type="email" name="email" required />
          <LabelRequired for="message">message</LabelRequired>
          <Input type="text" name="message" required />
          <LabelRequired for="details">additional details</LabelRequired>
          <TextArea type="email" name="details" cols="30" rows="10" required />
          <Button type="submit" text="send message" clicked={formClicked} />
        </Column>
      </StyledForm>
    </>
  )
}

export default Form

import React, { useContext } from "react"
import styled from "styled-components"
import emailjs from "emailjs-com"
import { MessageContext } from "../context/MessageContext"

import Button from "./Button"

const StyledForm = styled.form`
  background-color: var(--color-white);
  width: 60rem;
  height: 60rem;
  padding: 4rem 2rem;
  font-size: 1.2rem;
  box-shadow: 1rem 1rem 2rem 0.2rem rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 490px) {
    width: 96vw;
  }
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

  &:required {
    box-shadow: none;
  }
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
  &:required {
    box-shadow: none;
  }
`

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 490px) {
    justify-content: space-between;
    width: 48%;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 490px) {
    justify-content: space-between;
  }
`

const Form = () => {
  const [message, setMessage] = useContext(MessageContext)

  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        e.target,
        process.env.GATSBY_USER_ID
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
    setMessage(true)
  }

  //!Checking
  //TODO clear checking comment

  return (
    <>
      <StyledForm onSubmit={sendEmail}>
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
          <Button type="submit" text="send message" />
        </Column>
      </StyledForm>
    </>
  )
}

export default Form

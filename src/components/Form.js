import React from "react"
import styled from "styled-components"

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

const Form = () => {
  return (
    <>
      <StyledForm>
        <Column>
          <Row>
            <NameDiv>
              <Label for="fname">first name</Label>
              <Input type="text" name="fname" />
            </NameDiv>
            <NameDiv>
              <Label for="lname">last name</Label>
              <Input type="text" name="lname" />
            </NameDiv>
          </Row>
          <Label for="email">email</Label>
          <Input type="email" name="email" />
          <Label for="message">message</Label>
          <Input type="text" name="message" />
          <Label for="details">additional details</Label>
          <TextArea type="email" name="details" cols="30" rows="10" />
          <Button text="send message" />
        </Column>
      </StyledForm>
    </>
  )
}

export default Form

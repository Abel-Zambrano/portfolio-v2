import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  background-color: var(--color-white);
  padding: 4rem 2rem;
  font-size: 1.2rem;
  margin: 4rem auto;
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
  margin-bottom: 2rem;
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

const Button = styled.button`
  text-transform: uppercase;
  font-size: 2rem;
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
          <Label for="email">message</Label>
          <Input type="email" name="message" />
          <Label for="details">additional details</Label>
          <TextArea type="email" name="details" cols="30" rows="10" />
          <Button>send</Button>
        </Column>
      </StyledForm>
    </>
  )
}

export default Form

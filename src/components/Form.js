import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  font-size: 1.2rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  text-transform: uppercase;
`

const SmallInput = styled.input`
  margin-top: 0.6rem;
  margin-bottom: 0.3rem;
  height: 2.5rem;
  font-size: 1.4rem;
`

const Input = styled.input`
  margin-top: 0.6rem;
  margin-bottom: 0.3rem;
  height: 2.5rem;
`

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
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
              <SmallInput type="text" name="fname" />
            </NameDiv>
            <NameDiv>
              <Label for="lname">last name</Label>
              <SmallInput type="text" name="lname" />
            </NameDiv>
          </Row>
          <Label for="email">email</Label>
          <Input type="email" name="email" />
          <Label for="email">message</Label>
          <Input type="email" name="message" />
          <Label for="details">additional details</Label>
          <textarea type="email" name="details" cols="30" rows="10" />
          <Button>send</Button>
        </Column>
      </StyledForm>
    </>
  )
}

export default Form

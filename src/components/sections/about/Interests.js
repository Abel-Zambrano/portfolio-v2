import React from "react"
import styled from "styled-components"

const StyledInterests = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 60rem;

  .title {
    text-transform: uppercase;
    color: var(--color-primary-dark);
    font-weight: 200;
    text-decoration: underline;
  }

  .text {
    color: var(--color-jetblack);
  }
`

const Interests = () => {
  return (
    <StyledInterests>
      <div className="interest">
        <h2 className="title">onewheel</h2>
        <p className="text"></p>
      </div>
      <div className="interest">
        <h2 className="title">mountain biking</h2>
        <p className="text"></p>
      </div>
      <div className="interest">
        <h2 className="title">tech gadgets</h2>
        <p className="text"></p>
      </div>
    </StyledInterests>
  )
}

export default Interests

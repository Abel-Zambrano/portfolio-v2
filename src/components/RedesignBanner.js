import React from "react"
import styled from "styled-components"

const Banner = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  background-color: var(--color-update);
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  .banner-text {
    font-size: 2rem;
    color: var(--color-white);
  }
`

const RedesignBanner = () => {
  return (
    <Banner>
      <h2 className="banner-text">New Site in Development</h2>
    </Banner>
  )
}

export default RedesignBanner

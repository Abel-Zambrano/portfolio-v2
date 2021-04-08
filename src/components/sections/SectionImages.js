import React from "react"
import styled from "styled-components"

import Section from "./Section"

const StyledSectionImages = styled(Section)`
  height: 100%;
`

const SectionImages = ({ children, id }) => {
  return <StyledSectionImages id={id}>{children}</StyledSectionImages>
}

export default SectionImages

import React from "react"
import styled from "styled-components"

import { SiGit } from "@react-icons/all-files/si/SiGit"
import { MdWeb } from "@react-icons/all-files/md/MdWeb"

const StyledProjectLink = styled.div`
  width: 100%;
  height: 100%;

  &:hover {
    background-color: var(--color-primary-light);
  }

  .title {
    color: var(--color-white);
  }
`

const ProjectLink = () => {
  return (
    <StyledProjectLink>
      <h1 className="title">AN JANITORIAL</h1>
      <SiGit />
      <MdWeb />
    </StyledProjectLink>
  )
}

export default ProjectLink

import React from "react"
import styled from "styled-components"

import { SiGit } from "@react-icons/all-files/si/SiGit"
import { MdWeb } from "@react-icons/all-files/md/MdWeb"

const StyledProjectLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.3s;

  background-color: rgba(0, 0, 0, 0.2);

  &:hover {
  }

  .title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8rem;
    background-color: var(--shadow-primary);
  }

  .title {
    font-size: 3rem;
    color: var(--color-white);
  }

  .icon-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 8rem;
    margin-bottom: 3rem;
    background-color: var(--shadow-primary);
  }

  .icon-text-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
  }

  .icon {
    font-size: 6rem;
    color: white;
  }

  .text {
    font-size: 1.8rem;
    color: var(--color-white);
  }
`

const ProjectLink = () => {
  return (
    <StyledProjectLink>
      <div className="title-box">
        <h2 className="title">AN JANITORIAL</h2>
      </div>
      <div className="icon-container">
        <div className="icon-text-box">
          <MdWeb className="icon" />
          <p className="text">WEBSITE</p>
        </div>
        <div className="icon-text-box">
          {" "}
          <SiGit className="icon" />
          <p className="text">CODE</p>
        </div>
      </div>
    </StyledProjectLink>
  )
}

export default ProjectLink

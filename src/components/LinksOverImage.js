import React from "react"
import styled from "styled-components"

import { SiGit } from "@react-icons/all-files/si/SiGit"
import { MdWeb } from "@react-icons/all-files/md/MdWeb"

const StyledExperienceLink = styled.div`
  display: flex;
  opacity: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.3s;

  background-color: rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 1;
  }

  .title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12rem;
    background-color: var(--shadow-primary);
    transition: 0.3s;
    /* transform: translateY(100); */
  }

  .title {
    font-size: 3rem;
    color: var(--color-white);
    text-transform: uppercase;

    @media screen and (max-width: 390px) {
      font-size: 1.5rem;
    }
  }

  .link {
    &:link,
    &:visited {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      text-decoration: none;
      transition: 0.3s;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .icon-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 12rem;
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

const LinksOverImage = ({ title, webLink, gitLink }) => {
  return (
    <StyledExperienceLink>
      <div className="title-box">
        <h2 className="title">{title}</h2>
      </div>
      <div className="icon-container">
        <div className="icon-text-box">
          <a
            className="link"
            href={webLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdWeb className="icon" />
            <p className="text">WEBSITE</p>
          </a>
        </div>
        <div className="icon-text-box">
          <a
            className="link"
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGit className="icon" />
            <p className="text">CODE</p>
          </a>
        </div>
      </div>
    </StyledExperienceLink>
  )
}

export default LinksOverImage

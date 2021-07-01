import React from "react"
import styled from "styled-components"
import CardTitle from "../../CardTitle"
import Avatar from "../about/Avatar"
import data from "../../../JS/data"

const AboutWrapper = styled.article`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 50rem;
  width: 100%;

  /* .int-title {
    font-size: 2rem;
    color: var(--color-gray-dark);
  } */
`

const Bio = styled.div`
  font-weight: 300;
  color: var(--color-jetblack);
  text-align: center;

  .text {
    max-width: 60rem;
    line-height: 2rem;
    font-size: 1.52rem;
    color: var(--color-jetblack);
    padding: 0 4rem;
    line-height: 2.5rem;
  }

  .span-focus {
    font-weight: 400;
    color: var(--color-primary-dark);
  }

  a {
    &:link {
      text-decoration: none;
      color: var(--color-primary-dark);
    }

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: var(--color-primary-dark);
    }
  }

  .link {
    font-weight: 400;
  }
`

const About = () => {
  return (
    <AboutWrapper>
      <CardTitle title={data[0].title} />
      <Avatar />
      <Bio>
        <p className="text">
          Hello! and welcome to my portfolio. I'm a Front-End Developer located
          in San Francisco - Bay Area. I earned a B.S. Degree in{" "}
          <span className="span-focus">Information Technology Management</span>,
          and I currently work for 2 non-profits,{" "}
          <a
            className="link"
            href="https://armyofvolunteers.org/"
            target="_blank"
          >
            Army of Volunteers for Earth
          </a>{" "}
          and{" "}
          <a href="https://www.hackforla.org/" className="link" target="_blank">
            Hack for LA
          </a>
          . I have a passion for learning new technologies and enjoy solving
          complex problems.
        </p>
      </Bio>
    </AboutWrapper>
  )
}

export default About

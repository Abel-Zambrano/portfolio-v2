import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { IoIosArrowDroprightCircle } from "@react-icons/all-files/io/IoIosArrowDroprightCircle"
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle"

const ExpCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem auto;
  min-width: 70rem;
  max-height: 80rem; //TODO: remove max if needed
  box-shadow: 1rem 1rem 2rem 1rem rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 790px) {
    min-width: 0;
    width: 50rem;
  }

  @media screen and (max-width: 560px) {
    width: 98vw;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 2rem 2rem;
  height: 14rem;

  .title {
    text-transform: uppercase;
    color: var(--color-primary-dark);
    font-size: 2rem;
    font-weight: 300;
  }
`

const WebLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18rem;

  .link-btn {
    background-color: var(--color-primary-dark);
    color: var(--color-white);
    border: none;
    padding: 0.5rem 2rem;
    border-radius: 20rem;
    font-weight: 300;

    &:hover {
      cursor: pointer;
    }
  }
`

const TechContainer = styled.div`
  .tech-menu {
    display: flex;
    align-items: center;

    &-title {
      padding-left: 1rem;
      color: var(--color-gray-dark);
    }
  }
`

const RightArrow = styled(IoIosArrowDroprightCircle)`
  font-size: 2.5rem;
  color: var(--color-primary-dark);
`

const DownArrow = styled(IoIosArrowDropdownCircle)`
  font-size: 2.5rem;
  color: var(--color-primary-dark);
`

const TechMenu = styled.div`
  .tech-section {
    display: flex;
    justify-content: center;
  }

  .tech-list {
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 4rem;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 4rem;

    &-item {
      list-style: none;
      font-size: 1.3rem;
      text-transform: uppercase;
      color: var(--color-gray-dark);
    }
  }
`

const ExpScreenshot = () => {
  const [techId, setTechId] = useState()

  const techIdHandler = value => () => {
    setTechId(value)
  }

  const data = useStaticQuery(graphql`
    {
      allContentfulExperience {
        nodes {
          company
          gitUrl
          id
          webUrl
          preview {
            fluid(quality: 95) {
              ...GatsbyContentfulFluid
            }
          }
          tech {
            id
            techName
          }
        }
      }
    }
  `)

  const {
    allContentfulExperience: { nodes: exp },
  } = data

  return (
    <div>
      {exp.map(e => {
        return (
          <ExpCard key={e.id}>
            <Image fluid={e.preview.fluid} />
            <Info>
              <h2 className="title">{e.company}</h2>
              <WebLinks>
                <a href={e.webUrl} className="link" target="_blank">
                  <button className="link-btn">Website</button>
                </a>
                <a href={e.gitUrl} className="link" target="_blank">
                  <button className="link-btn">Code</button>
                </a>
              </WebLinks>
              <TechContainer>
                <div className="tech-menu">
                  {techId === e.id ? (
                    <DownArrow id={e.id} onClick={techIdHandler(null)} />
                  ) : (
                    <RightArrow id={e.id} onClick={techIdHandler(e.id)} />
                  )}{" "}
                  <h3 className="tech-menu-title">Tech Stack</h3>
                </div>
              </TechContainer>
            </Info>
            <TechMenu>
              <div className="tech-section">
                {techId === e.id ? (
                  <ul className="tech-list">
                    {e.tech.techName.map(f => {
                      return <li className="tech-list-item">{f}</li>
                    })}
                  </ul>
                ) : null}
              </div>
            </TechMenu>
          </ExpCard>
        )
      })}
    </div>
  )
}
export default ExpScreenshot

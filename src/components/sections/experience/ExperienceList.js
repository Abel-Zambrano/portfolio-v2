import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { IoIosArrowDroprightCircle } from "@react-icons/all-files/io/IoIosArrowDroprightCircle"
import RedesignBanner from "../../RedesignBanner"

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
    transition: background-color 200ms ease-in;

    &:hover {
      cursor: pointer;
      background-color: var(--color-primary);

      @media screen and (max-width: 560px) {
        background-color: var(--color-primary-dark);
      }
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
  transition: all 200ms ease-in;

  &.down {
    transform: rotate(90deg) !important; //TODO
  }

  &:hover {
    color: var(--color-primary);
  }
`

const TechMenu = styled.div`
  transition: all 200ms ease-in;
  height: 0; // TODO: create css classname to offset
  opacity: 0; //TODO

  &.visible-list {
    height: 16rem;
    opacity: 1;
  }

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

const ExperienceList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulExperience {
        nodes {
          company
          gitUrl
          id
          webUrl
          redesign
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

  const [menuOpen, setMenuOpen] = useState(false)
  const [trackId, setTrackId] = useState()
  const idArr = []

  const menuHandler = value => () => {
    setMenuOpen(!menuOpen)
    setTrackId(value)
    idArr.push(value)

    // arrHandler(idArr, trackId)
  }

  const arrHandler = (arr, id) => {
    console.log(`arrHandler activated `)
    console.log(`arr: ${arr}`)
    console.log(`id: ${id}`)
    for (let i = 0; i < arr.length; i++) {
      if (id != arr[i]) {
        console.log(`first break ${arr}`)
        break
      } else {
        arr.push(id)
        console.log(`second break ${arr}`)
        break
      }
    }
  }

  return (
    <div>
      {exp.map(e => {
        return (
          <ExpCard key={e.id}>
            <Image fluid={e.preview.fluid} />
            {e.redesign ? <RedesignBanner /> : null}
            <Info>
              <h2 className="title">
                {e.company}
                {e.id}
              </h2>
              <WebLinks>
                <a
                  href={e.webUrl}
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="link-btn">Website</button>
                </a>
                <a
                  href={e.gitUrl}
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="link-btn">Code</button>
                </a>
              </WebLinks>
              <TechContainer>
                <div className="tech-menu">
                  <RightArrow
                    className={menuOpen ? "down" : null}
                    onClick={menuHandler(e.id)}
                  />
                  <h3 className="tech-menu-title">Tech Stack</h3>
                </div>
              </TechContainer>
            </Info>
            {/* <TechMenu className={downArrow ? "visible-list" : null}>
              <div className="tech-section">
                <ul className="tech-list">
                  {e.tech.techName.map(f => {
                    return (
                      <li key={f} className="tech-list-item">
                        {f}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TechMenu> */}
          </ExpCard>
        )
      })}
    </div>
  )
}
export default ExperienceList

import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { IoIosArrowDroprightCircle } from "@react-icons/all-files/io/IoIosArrowDroprightCircle"
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle"
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

const DownArrow = styled(IoIosArrowDropdownCircle)`
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
          order
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

  const [order, setOrder] = useState()
  const [orderArr, setOrderArr] = useState([])
  const [inArray, setInArray] = useState(false)

  const enterArray = (arr, order) => {
    if (arr.indexOf(order) !== -1) {
      console.log("value exists")
    } else {
      console.log("does not exist, adding value to array")
      arr.push(order)
      setInArray(true)
    }
  }

  const exitArray = (arr, order) => {
    const index = arr.indexOf(order)
    if (index > -1) {
      arr.splice(index, 1)
      setInArray(false)
      console.log(arr)
    }
  }

  const enterHandler = (arr, value) => () => {
    setOrder(value)
    enterArray(arr, value)
    // arrCheck(arr, value)
  }

  const exitHandler = (arr, value) => () => {
    setOrder(value)
    exitArray(arr, value)
  }

  console.log(`Order: ${order}`)
  console.log(`Order Array: ${orderArr}`)
  console.log(`Order in Array: ${inArray}`)

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
                {e.order}
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
                  <DownArrow onClick={exitHandler(orderArr, e.order)} />
                  {/* {inArray ? (
                    <DownArrow onClick={exitHandler(orderArr, e.order)} />
                  ) : (
                    <RightArrow
                      // className={order === e.order ? "down" : null}
                      onClick={enterHandler(orderArr, e.order)}
                    />
                  )} */}
                  <RightArrow
                    // className={order === e.order ? "down" : null}
                    onClick={enterHandler(orderArr, e.order)}
                  />
                  <h3 className="tech-menu-title">Tech Stack</h3>
                </div>
              </TechContainer>
            </Info>
            {/* <TechMenu className={trackId === e.order ? "visible-list" : null}>
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

import React, { useState } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { IoIosArrowDroprightCircle } from "@react-icons/all-files/io/IoIosArrowDroprightCircle"
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle"
import RedesignBanner from "../../RedesignBanner"
import TechMenu from "./TechMenu"

const MyExpItem = styled.div`
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

const ExpItem = ({ id, image, redesign, company, website, github, tech }) => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
    console.log(open)
  }

  return (
    <MyExpItem key={id}>
      <Image fluid={image} />
      {redesign ? <RedesignBanner /> : null}
      <Info>
        <h2 className="title">{company}</h2>
        <WebLinks>
          <a href={website} className="link" target="_blank" rel="noreferrer">
            <button className="link-btn">Website</button>
          </a>
          <a href={github} className="link" target="_blank" rel="noreferrer">
            <button className="link-btn">Code</button>
          </a>
        </WebLinks>
        <TechContainer>
          <div className="tech-menu">
            <RightArrow className={open ? "down" : null} onClick={toggle} />
            <h3 className="tech-menu-title">Tech Stack</h3>
          </div>
        </TechContainer>
      </Info>
      <TechMenu tech={tech} visible={open} />
    </MyExpItem>
  )
}

export default ExpItem

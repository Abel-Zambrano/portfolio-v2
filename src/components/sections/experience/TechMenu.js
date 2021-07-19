import React from "react"
import styled from "styled-components"

const MyTechMenu = styled.div`
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

const TechMenu = ({ tech, visible }) => {
  return (
    <MyTechMenu className={visible ? "visible-list" : null}>
      <div className="tech-section">
        <ul className="tech-list">
          {tech.techName.map(f => {
            return (
              <li key={f} className="tech-list-item">
                {f}
              </li>
            )
          })}
        </ul>
      </div>
    </MyTechMenu>
  )
}

export default TechMenu

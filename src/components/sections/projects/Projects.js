import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import data from "../../../JS/data"
import BackgroundImage from "gatsby-background-image"

import CardTitle from "../../CardTitle"
import Test from "./Test"

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`

const Projects = () => {
  const projectsData = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          gitUrl
          webUrl
          title
          id
          preview {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  const {
    allContentfulProject: { nodes: projects },
  } = projectsData

  console.log(projects)
  console.log(projects[0].preview.fluid)

  return (
    <StyledProjects>
      <CardTitle title={data[3].title} />
      <h1>Coming Soon...</h1>
      <BackgroundImage
        style={{ width: "100rem", height: "100rem" }}
        fluid={projects[0].preview.fluid}
      />
      <Test />
    </StyledProjects>
  )
}

export default Projects

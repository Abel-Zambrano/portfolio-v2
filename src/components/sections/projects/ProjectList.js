import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import LinksOverImage from "../../LinksOverImage"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 80rem;
  height: 40rem;
  background-repeat: no-repeat;
  transition: 0.3s;
  margin: 6rem auto;
  box-shadow: 1rem 1rem 2rem 1rem rgba(0, 0, 0, 0.4);
  background-size: contain;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 760px) {
    width: 36rem;
    height: 18rem;
  }
`

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          webUrl
          gitUrl
          id
          title
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
    allContentfulProject: { nodes: project },
  } = data

  return (
    <div>
      {project.map(p => {
        return (
          <StyledBackgroundImage id={p.id} fluid={p.preview.fluid}>
            <LinksOverImage
              title={p.title}
              webLink={p.webUrl}
              gitLink={p.gitUrl}
            />
          </StyledBackgroundImage>
        )
      })}
    </div>
  )
}

export default ProjectList

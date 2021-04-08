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

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 760px) {
    width: 36rem;
    height: 18rem;
  }
`

const ExpScreenshot = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulExperience {
        nodes {
          company
          gitUrl
          id
          webUrl
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
    allContentfulExperience: { nodes: exp },
  } = data

  return (
    <div>
      {exp.map(e => {
        return (
          <StyledBackgroundImage id={e.id} fluid={e.preview.fluid}>
            <LinksOverImage
              title={e.company}
              webLink={e.webUrl}
              gitLink={e.gitUrl}
            />
          </StyledBackgroundImage>
        )
      })}
    </div>
  )
}

export default ExpScreenshot

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ExpItem from "./ExpItem"

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

  return (
    <>
      {exp.map(e => {
        return (
          <ExpItem
            key={e.id}
            image={e.preview.fluid}
            company={e.company}
            website={e.webUrl}
            github={e.gitUrl}
            tech={e.tech}
            redesign={e.redesign}
          />
        )
      })}
    </>
  )
}
export default ExperienceList

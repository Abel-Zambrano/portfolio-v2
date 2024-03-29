import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Item from "../../Item"

const ExperienceList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulExperience(sort: { order: DESC, fields: order }) {
        nodes {
          company
          gitUrl
          id
          preview {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          redesign
          webUrl
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
          <Item
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

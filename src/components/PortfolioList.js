import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Item from "./Item"

const PortfolioList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio {
        nodes {
          id
          title
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          webUrl
          gitUrl
          tech {
            techName
          }
        }
      }
    }
  `)

  const {
    allContentfulPortfolio: { nodes: portfolio },
  } = data

  return (
    <>
      {portfolio.map(e => {
        return (
          <Item
            key={e.id}
            image={e.image.fluid}
            company={e.title}
            website={e.webUrl}
            github={e.gitUrl}
            tech={e.tech}
          />
        )
      })}
    </>
  )
}

export default PortfolioList

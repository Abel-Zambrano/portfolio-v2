import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Test = () => {
  const data = useStaticQuery(graphql`
    {
      strapiProjects {
        id
        title
        webURL
        gitURL
        children {
          ... on ImageSharp {
            id
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  const testQuery = data.strapiProjects
  return (
    <div>
      <p>{testQuery.title}</p>
      <img src={testQuery.webURL} alt="rocket burger" />
      <a href={testQuery.gitURL}>GITHUB</a>
    </div>
  )
}

export default Test

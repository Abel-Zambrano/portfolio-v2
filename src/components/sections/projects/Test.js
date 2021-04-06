import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Test = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiProjects {
        edges {
          node {
            gitURL
            id
            title
            webURL
            preview {
              url
            }
          }
        }
      }
    }
  `)

  const query = data.allStrapiProjects.edges
  const imgQuery = query[0].node.preview[0].url
  console.log(imgQuery)
  console.log(query)
  return (
    <div>
      {query.map(e => {
        return (
          <div>
            <h1>{e.node.title}</h1>
            <a href={e.node.webURL}>Web Site</a>
            <p>{e.node.preview.url}</p>
            {/* <img
              src={`http://localhost:1337${e.node.preview[0].url}`}
              alt={e.node.id}
            /> */}
          </div>
        )
      })}

      {/* <p>{query.title}</p>
      <img src={query.webURL} alt="rocket burger" />
      <a href={query.gitURL}>GITHUB</a> */}
    </div>
  )
}

export default Test

import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
  },
]

const navLinks = data.map(link => {
  return (
    <li>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ className }) => {
  return <ul>{navLinks}</ul>
}

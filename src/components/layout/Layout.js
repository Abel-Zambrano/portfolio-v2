import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, id }) => {
  return (
    <>
      <Header id={id} />
      {children}
      <Footer />
    </>
  )
}

export default Layout

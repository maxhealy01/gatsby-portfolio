import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
export default () => {
  return (
    <Layout>
      <Hero />
      {/* <Services /> */}
      <Projects showLink />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Seo from "../components/SEO"

export default () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      {/* <Services /> */}
      <Projects showLink />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid

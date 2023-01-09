import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid
import Seo from "../components/SEO"

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title="Projects" />
      <section className="projects-page">
        <Projects />
      </section>
    </Layout>
  )
}

export default ProjectsPage

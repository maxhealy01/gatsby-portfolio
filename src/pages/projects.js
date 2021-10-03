import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = () => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects />
      </section>
    </Layout>
  )
}

export default ProjectsPage

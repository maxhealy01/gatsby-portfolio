import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "project-images" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

const Projects = ({ showLink }) => {
  const data = useStaticQuery(query)
  const images = []

  data.allFile.edges.forEach(image => {
    images.push(image.node.childImageSharp.fluid)
  })

  const projects = [
    {
      github: "https://github.com/maxhealy01/clay-by-stacy",
      id: 0,
      description: "An ecommerce app where users can purchase clay art.",
      title: "Clay By Stacy",
      url: "claybystacy.net",
      image: images[1],
      stack: [
        { id: 1, title: "Gatsby.js" },
        { id: 2, title: "React" },
        { id: 3, title: "Stripe" },
        { id: 4, title: "GraphQL" },
        { id: 5, title: "Use-Shopping-Cart" },
        { id: 6, title: "Formspree" },
      ],
    },
    {
      github: "https://github.com/maxhealy01/here-and-now",
      id: 1,
      description:
        "A social app that uses Mapbox to connect its users in time and space.",
      title: "Here and Now",
      url: "https://app-hereandnow.herokuapp.com/",
      image: images[0],
      stack: [
        { id: 1, title: "Node.js" },
        { id: 2, title: "Express" },
        { id: 3, title: "MongoDB" },
        { id: 4, title: "GraphQL" },
        { id: 5, title: "React" },
        { id: 6, title: "Mapbox" },
      ],
    },
  ]

  return (
    <section className="section projects">
      <Title title="featured projects" />
      <div className="section-center projects-center">
        {projects.map(project => {
          return <Project key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects

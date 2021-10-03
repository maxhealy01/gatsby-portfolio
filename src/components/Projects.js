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
      github: "https://bit.ly/2WZzYVc",
      id: 1,
      description: "An ecommerce app where users can purchase clay art.",
      title: "Creative Clay By Stacy",
      url: "https://bit.ly/3n5ztn1",
      image: images[1],
      stack: [
        { id: 1, title: "Gatsby.js" },
        { id: 2, title: "React" },
        { id: 3, title: "Stripe" },
        { id: 4, title: "JSX" },
        { id: 5, title: "GraphQL" },
      ],
    },
    {
      github: "https://bit.ly/3DW74Gi",
      id: 2,
      description:
        "An inventory and ordering management tool in active use by a mushroom-growing business.",
      title: "Mushroom Inventory",
      url: "https://bit.ly/3zKPGBH",
      image: images[2],
      stack: [
        { id: 1, title: "Node.js" },
        { id: 2, title: "Express" },
        { id: 3, title: "MongoDB" },
        { id: 4, title: "GraphQL" },
        { id: 5, title: "React" },
        { id: 6, title: "Sass" },
        { id: 7, title: "Mongoose" },
        { id: 8, title: "Apollo" },
      ],
    },
    {
      github: "https://github.com/maxhealy01/sati-ali-art",
      id: 3,
      description:
        "Art by Sati is an online gallery featuring works by Sati Ali, arranged according to type.",
      title: "Art by Sati",
      url: "https://bit.ly/3h8WuSf",
      image: images[0],
      stack: [
        { id: 1, title: "Gatsby.js" },
        { id: 2, title: "React" },
        { id: 2, title: "Contentful" },
        { id: 2, title: "Sass" },
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

import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  const info = [
    "Full Stack Web Developer leveraging a ​background in management and customer service.",
    "Recognized for leadership skills and problem-solving capabilities.",
    "​Recently received a Certificate in Web Development from the University of Texas at Austin.",
    "Excellent collaborator with interpersonal skills who works well on team-based projects as well as independently.",
    "Recognized for proven complex problem-solving abilities to contribute effectively as a part of a fast-paced, quality-driven team.",
  ]

  const stack = [
    { id: 1, title: "React" },
    { id: 2, title: "CSS" },
    { id: 3, title: "MongoDB" },
    { id: 4, title: "Node.js" },
    { id: 5, title: "Express" },
    { id: 6, title: "SQL" },
    { id: 7, title: "HTML5" },
    { id: 8, title: "CSS3" },
    { id: 9, title: "GatsbyJS" },
    { id: 10, title: "Next.js" },
    { id: 11, title: "Sass" },
    { id: 12, title: "Stripe" },
  ]
  const title = "about me"

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <ul className="about-list">
              {info.map(item => (
                <li>{item}</li>
              ))}
            </ul>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About

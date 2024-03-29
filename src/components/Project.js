import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, github, stack, url, image }) => {
  return (
    <article className="project">
      <Image fluid={image} className="project-img" role="presentation" />
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a
            href={github}
            alt={`A link to the Github repo for ${title}`}
            title="Github Link"
          >
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} alt={`A link to ${title}`} title="Website Link">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project

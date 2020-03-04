import React from "react"
import projectStyles from "./projectStyles"
import Img from "gatsby-image"

export const Project = ({ project }) => {
    const classes = projectStyles()

    return (
        <div className={classes.projectContainer}>
            <h3 className={classes.title}>{project.title}</h3>
            <div className={classes.descriptionContainer}>
                <Img
                    fluid={project.images[0].image.childImageSharp.fluid}
                    className={classes.image}
                    alt="Project Picture"
                />
                <p className={classes.tech}>
                {project.tech.map((tech) => {
                    return (
                        tech.technology === project.tech[project.tech.length - 1].technology ?
                        `${tech.technology}`
                        :
                        `${tech.technology} | `
                    )
                })}
                </p>
                <p className={classes.description}>{project.description}</p>
                <p className={classes.responsibilities}>
                    {project.responsibilities}
                </p>
                <div className={classes.linkContainer}>
                    <h5 className={classes.linkTitle}>Source Code:</h5>
                    <a href={project.git} className={classes.link}>
                        {project.git}
                    </a>
                </div>
                <div className={classes.linkContainer}>
                    <h5 className={classes.linkTitle}>Website:</h5>
                    <a href={project.link} className={classes.link}>
                        {project.link}
                    </a>
                </div>
            </div>
        </div>
    )
}

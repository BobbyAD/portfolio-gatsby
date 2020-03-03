import React from "react"
import projectStyles from "./projectStyles"

export const Project = ({ project }) => {
    const classes = projectStyles()

    return (
        <div className={classes.projectContainer}>
            <h3 className={classes.title}>{project.title}</h3>
            <div className={classes.descriptionContainer}>
                <p className={classes.description}>{project.description}</p>
                <p className={classes.responsibilities}>
                    {project.responsibilities}
                </p>
                <a href={project.git}>
                    <div className={classes.link}>{project.git}</div>
                </a>
                <a href={project.link}>
                    <div className={classes.link}>{project.link}</div>
                </a>
            </div>
        </div>
    )
}

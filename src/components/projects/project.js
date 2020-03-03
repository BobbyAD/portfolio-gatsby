import React from "react"
import projectStyles from "./projectStyles"

export const Project = ({ project }) => {
    const classes = projectStyles()

    return (
        <div>
            <h3 className={classes.title}>{project.title}</h3>
            <p className={classes.description}>{project.description}</p>
            <p className={classes.responsibilities}>{project.responsibilities}</p>
            <a href={`${classes.git}`}>{project.git}</a>
            <a href={`${classes.link}`}>{project.link}</a>
        </div>
    )
}

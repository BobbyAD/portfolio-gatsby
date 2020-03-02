import React from "react"
import projectStyles from "./projectStyles"

export const Project = ({ project }) => {
    const classes = projectStyles()

    return (
        <div>
            <h3 className={classes.title}>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.responsibilities}</p>
            <p>{project.git}</p>
            <p>{project.link}</p>
        </div>
    )
}

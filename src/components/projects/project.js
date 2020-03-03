import React from "react"
import projectStyles from "./projectStyles"

export const Project = ({ project }) => {
    const classes = projectStyles()

    return (
        <div className={classes.projectContainer}>
            <h3 className={classes.title}>{project.title}</h3>
            <div className={classes.descriptionContainer}>
                <p className={classes.description}> Images Coming Soon </p>
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

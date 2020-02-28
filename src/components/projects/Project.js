import React from 'react'

export const Project = ({ project }) => {
    console.log(project);
    return (
        <div>
            <p>{project.title}</p>
            <p>{project.description}</p>
            <p>{project.responsibilities}</p>
            <p>{project.git}</p>
            <p>{project.link}</p>
        </div>
    )
}

import React from 'react'

export const Project = ({ project }) => {
    console.log(project);
    return (
        <div>
            <p>{project.title}</p>
            <p>{project.description}</p>
        </div>
    )
}

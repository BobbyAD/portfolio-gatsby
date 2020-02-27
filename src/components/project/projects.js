import React from "react"
import { graphql } from "gatsby"
import { Project } from "./project"

export const Projects = ({data}) => {
    const projects = []

    console.log(data);

    return (
        <div>
            <h1>Projects</h1>
            {projects.map(project => (
                <Project project={project} />
            ))}
        </div>
    )
}

export const data = graphql`
        query ProjectsQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            description
                        }
                    }
                }
            }
        }
    `
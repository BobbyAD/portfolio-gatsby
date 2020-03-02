import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Project } from "./project"
import { Title } from "../title/title"
import projectStyles from "./projectStyles"

const Projects = ({ data }) => {
    const classes = projectStyles();

    return (
        <div className={classes.container}>
            <Title title="Projects" />
            {data.map(project => (
                <Project project={project.node.frontmatter} key={project.node.id} />
            ))}
        </div>
    )
}

export default () => (
    <StaticQuery
        query={graphql`
            query ProjectsQuery {
                allMarkdownRemark(
                    sort: { order: ASC, fields: [frontmatter___order] }
                    filter: { frontmatter: { templateKey: { eq: "project" } } }
                ) {
                    edges {
                        node {
                            frontmatter {
                                title
                                order
                                description
                                responsibilities
                                git
                                link
                            }
                        }
                    }
                }
            }
        `}
        render={data => <Projects data={data.allMarkdownRemark.edges} />}
    />
)

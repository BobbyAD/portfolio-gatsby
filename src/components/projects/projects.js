import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Project } from "./project"
import { Title } from "../title/title"

const Projects = ({ data }) => {
    return (
        <div>
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

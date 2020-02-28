import React from "./node_modules/react"
import { graphql, StaticQuery } from "./node_modules/gatsby"

const Social = ({ data }) => {
    return (
        <div>
            <h1>Follow Me</h1>
            <p>{data.github}</p>
            <p>{data.linkedin}</p>
        </div>
    )
}

export default () => (
    <StaticQuery
        query={graphql`
            query SocialQuery {
                allMarkdownRemark(
                    sort: { order: ASC, fields: [frontmatter___order] }
                    filter: { frontmatter: { templateKey: { eq: "ancillary" } } }
                ) {
                    edges {
                        node {
                            frontmatter {
                                github
                                linkedin
                            }
                        }
                    }
                }
            }
        `}
        render={data => <Social data={data.allMarkdownRemark.edges[0].node.frontmatter} />}
    />
)

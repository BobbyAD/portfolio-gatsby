import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Title } from "../title/title"

const Social = ({ data }) => {
    return (
        <div>
            <Title title="Follow Me" />
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

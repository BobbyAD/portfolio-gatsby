import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Title } from "../title/title"
import socialStyles from "./socialStyles"


//TODO: about https://www.impressivewebs.com/how-to-put-a-multi-line-indent-on-a-styled-blockquote/
const Social = ({ data }) => {
    const classes = socialStyles()

    return (
        <div className={classes.container}>
            <Title title="Follow Me" />
            <div className={classes.linkContainer}>
                <a href={data.github} className={classes.link}>
                    {data.github}
                </a>
            </div>
            <div className={classes.linkContainer}>
                <a href={data.linkedin} className={classes.link}>
                    {data.linkedin}
                </a>
            </div>
        </div>
    )
}

export default () => (
    <StaticQuery
        query={graphql`
            query SocialQuery {
                allMarkdownRemark(
                    sort: { order: ASC, fields: [frontmatter___order] }
                    filter: {
                        frontmatter: { templateKey: { eq: "ancillary" } }
                    }
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
        render={data => (
            <Social data={data.allMarkdownRemark.edges[0].node.frontmatter} />
        )}
    />
)

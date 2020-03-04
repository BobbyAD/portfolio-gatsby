import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Title } from "../title/title"
import socialStyles from "./socialStyles"
import Img from "gatsby-image"

//TODO: about https://www.impressivewebs.com/how-to-put-a-multi-line-indent-on-a-styled-blockquote/
const Social = ({ data, pic }) => {
    const classes = socialStyles()

    console.log(data.picture)

    return (
        <div className={classes.container}>
            <Title title="About Me" />
            <blockquote className={classes.about}>
                <Img fluid={data.picture.childImageSharp.fluid} alt="Bobby's Picture" />
                {data.about}
            </blockquote>
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
                                about
                                github
                                linkedin
                                picture {
                                    childImageSharp {
                                        fluid(maxWidth: 360, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Social 
                data={data.allMarkdownRemark.edges[0].node.frontmatter} 
            />
        )}
    />
)

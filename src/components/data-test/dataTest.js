import React from "react"
import { graphql, StaticQuery } from "gatsby"

const DataTest = ({data}) => {

    return (
        <div>
            {data.allMarkdownRemark.edges.map(post => (
                <div>
                    <h3>{post.node.frontmatter.title}</h3>
                    {console.log(post)}
                    {post.node.frontmatter.images ? (
                        post.node.frontmatter.images.map(img => (
                            <img src={img.image} />
                        ))
                    ) : (
                        <div>yoyoyo</div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default () => (
    <StaticQuery
        query={graphql`
            query TestIndexQuery {
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
        `}
        render={( data ) => <DataTest data={data} />}
    />
)
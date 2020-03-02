import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Skill } from "./skill"
import { Title } from "../title/title"
import skillStyles from "./skillStyles"

const Skills = ({ data }) => {
    const classes = skillStyles()

    return (
        <div className={classes.container}>
            <Title title="Skills" />
            <div className={classes.skillContainer}>
                {data.map(skill => (
                    <Skill
                        skill={skill.skill}
                        style={classes.skill}
                        key={skill.skill}
                    />
                ))}
            </div>
        </div>
    )
}

export default () => (
    <StaticQuery
        query={graphql`
            query SkillsQuery {
                allMarkdownRemark(
                    sort: { order: ASC, fields: [frontmatter___skills___skill] }
                    filter: {
                        frontmatter: { templateKey: { eq: "ancillary" } }
                    }
                ) {
                    edges {
                        node {
                            frontmatter {
                                skills {
                                    skill
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Skills
                data={data.allMarkdownRemark.edges[0].node.frontmatter.skills}
            />
        )}
    />
)

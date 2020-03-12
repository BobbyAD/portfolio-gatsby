import React from "react"

//CSS Reset
import "../style/reset.css"
//Fonts and global stuff
import "../style/base.css"
//Actual styling
import indexStyles from "../style/indexStyles.js"

import SEO from "../components/seo"
import Name from "../components/name/name"
import { Contact } from "../components/forms/contact.js"
import Projects from "../components/projects/projects.js"
import Skills from "../components/skills/skills.js"
import Social from "../components/social/social.js"
import Scroll from "../components/scroll/scroll"

const IndexPage = () => {
    const classes = indexStyles()

    return (
        <>
            <SEO title="Home" />
            <Name />
            <Scroll />
            <div className={classes.bigContainer}>
                <div className={classes.marginContainer}>
                    <Projects />
                    <Skills />
                    <Social />
                    <Contact />
                </div>
            </div>
        </>
    )
}

export default IndexPage

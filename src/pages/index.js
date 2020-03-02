import React from "react"

//CSS Reset
import "../style/reset.css"
import "../style/base.css"

import SEO from "../components/seo"
import Name from "../components/name/name"
import { Contact } from "../components/forms/contact.js"
import Projects from "../components/projects/projects.js"
import Skills from "../components/skills/skills.js"
import Social from "../components/social/social.js"

const IndexPage = () => (
    <div>
        <SEO title="Home" />
        <Name />
        <Projects />
        <Skills />
        <Social />
        <Contact />
    </div>
)

export default IndexPage

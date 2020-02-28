import React from "react"
import { Link } from "gatsby"

//CSS Reset
import "../style/reset.css"
import "../style/base.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Name from "../components/name/name"
import { Contact } from "../components/forms/contact"
import Projects from "../components/projects/projects"
import Skills from "../components/skills/skills"
import Social from "../components/social/social"

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

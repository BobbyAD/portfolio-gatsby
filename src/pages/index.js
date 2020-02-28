import React from "react"
import { Link } from "gatsby"

//CSS Reset
import '../style/reset.css';
import '../style/base.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Name from "../components/name/name"
import { Contact } from "../components/forms/Contact";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

const IndexPage = () => (
    <div>
        <SEO title="Home" />
        <Name />
        <Projects />
        <Skills />
        <Contact />
    </div>
)

export default IndexPage

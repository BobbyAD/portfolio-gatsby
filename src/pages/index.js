import React from "react"
import { Link } from "gatsby"

//CSS Reset
import '../style/reset.css';
import '../style/base.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Name from "../components/name/name"

const IndexPage = () => (
    <div>
        <SEO title="Home" />
        <Name />
    </div>
)

export default IndexPage

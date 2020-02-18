import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Name from "../components/name/name"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Name />
    </Layout>
)

export default IndexPage

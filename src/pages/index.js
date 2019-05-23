import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/layout-override.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <p>This is my blog.</p>
    <p>Isn't it great?</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random image" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const IndexPage = () => (
  <>
    <Header headerText="Welcome" />
    
      <p>This is my blog.</p>
      <p>Isn't it great?</p>
      <img src="https://source.unsplash.com/random/400x200" alt="random" />

      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      <p>Visit <Link to="/page-2">the next page.</Link></p>
      <p>Learn about <Link to="/about">me.</Link></p>

    </>
)

export default IndexPage

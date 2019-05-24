import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

const AboutPage = () => {
    return (
        <>
            <div style={{ color: `teal` }}>
                <Header headerText="About Me" />  
                <p>I am a web developer learning Gatsby and React!</p>
            </div>
            <p>Return to <Link to="/">Home</Link></p>
            <p>Reach out and <Link to="/contact">say Hello!</Link></p>
        </>
    )

}

export default AboutPage
 

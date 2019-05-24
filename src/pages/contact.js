import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const ContactPage = () => {
    return (
        <div style={{ color: `teal` }}>
            <Header headerText="Contact" />
            <p>Send us a message!</p>
            <p>Return to <Link to="/">Home</Link></p>

        </div>
    )
}

export default ContactPage
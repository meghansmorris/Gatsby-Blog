import React from 'react'
import Header from "../components/header"
import { Link } from "gatsby"



const BlogPage = () => {
    return (
        <div>
            <Header headerText="Blog" />
            <p>Posts will show up here.</p>

            <p>Return to <Link to="/">Home</Link></p>

        </div>
    )
}

export default BlogPage
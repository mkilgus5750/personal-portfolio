import React from "react"
import Layout from "../components/layout/layout"
import './about.css'
import Illustration2 from "../components/illustration/illustration2"

export default function About() {
    return(
        <Layout className="About">
            <div>
                <div className="About-container">
                        <div className="About-content">
                        <h1>About</h1>
                        <p>I’m a motivated individual who loves the continual learning aspect of front-end development and design. Every project is unique and I enjoy the process of building new things. I'm currently pursuing an undergraduate degree in computer science.</p>
                        </div>
                        <Illustration2 className="illustration2"/>
                </div>
            </div>
        </Layout>
    )
}
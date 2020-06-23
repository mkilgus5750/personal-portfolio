import React from "react";
import Layout from "../components/layout/layout"
import './index.css'

import Illustration from "../components/illustration/illustration"

export default function Index(){
  

  return(
    <Layout className="Index">
      <div className="Index-container">
        <div className="Index-words">
          <p className="Hi">Hi there! I am</p>
          <h1>Mari Kilgus</h1>
          <p className="Index-bio">CS Student, flute player, and aspiring front-end developer</p>
          <div className="Index-buttons">
            <a href='/contact'><button className="Connect-button">Let's connect!</button></a>
            <a href='/portfolio'><button className="Portfolio-button">See portfolo</button></a>
          </div>
        </div>
        <Illustration className="maxwidth"/>

      </div>
    </Layout>
  )
}

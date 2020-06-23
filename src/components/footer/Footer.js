import { Link } from "gatsby"
import React from "react"
import './Footer.css'

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer__container">
                <p className="footer__copyright">Created by Mari Kilgus © 2020</p>
                <p>Contact:
                marikilgus@gmail.com
                </p>
            </div>
        </div>
    )
}
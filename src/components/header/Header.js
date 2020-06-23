import { Link } from "gatsby"
import React from "react"
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <span className="header__logo">Mari Kilgus</span>
        <nav className="nav">
          <ul className="nav__list">
            <li><Link className="nav__item" to='/'>Home</Link></li>
            <li><Link className="nav__item" to='/about'>About</Link></li>
            <li><Link className="nav__item" to='/contact'>Contact</Link></li>
            <li><Link className="nav__item" to='/portfolio'>Portfolio</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

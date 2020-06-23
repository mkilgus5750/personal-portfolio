import React from "react"
import Header from '../header/header';
import Footer from '../footer/footer';
import './layout.css';

export default function Layout({children}){
  return(
    <div className="Layout">
        <Header />
        <div className="Layout-content">
          {children}
        </div>
        <Footer />
    </div>
  )
}

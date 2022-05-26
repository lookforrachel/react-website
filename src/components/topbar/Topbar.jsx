import "./topbar.scss"
import Logo from "../../img/RY_favicon.png"
import {Mail, GitHub, LinkedIn, Twitter} from "@material-ui/icons"
// import React, { useState } from "react"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className = {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"><img src={Logo} alt=""/></a>
          <div className="iconWrapper">
            <div className="itemContainer">
                <a href="mailto: lookfor.rachel@gmail.com"><Mail className="icon"/></a>
                {/* <span>lookfor.rachel@gmail.com</span> */}
            </div>
            <div className="itemContainer">
                <a href="https://github.com/lookforrachel"><GitHub className="icon"/></a>
            </div>
            <div className="itemContainer">
                <a href="https://www.linkedin.com/in/lookforrachel/"><LinkedIn className="icon"/></a>
            </div>
            <div className="itemContainer">
                <a href="https://twitter.com/lookforrachel"><Twitter className="icon"/></a>
            </div>
        </div>
        </div>
        <div className="right">
          <div className="pagesWrapper">
            <a href="#intro" className="pageLink">Home</a>
            <a href="#portfolio" className="pageLink">Portfolio</a>
            <a href="#contact" className="pageLink">Contact</a>
          </div>
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>

        </div>
      </div>
    </div>
  )
}

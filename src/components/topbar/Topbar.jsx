import "./topbar.scss";
import "../menu/menu.scss";
import Logo from "../../img/RY_favicon_WHITE.png";
import { Mail, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import React, { useState } from "react";

function Topbar() {
  const [topbarColor, setTopbarColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen)
    console.log("clicked")
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setTopbarColor(true)
    } else {
      setTopbarColor(false)
    }
    // console.log(window.scrollY);
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className = {"topbar " + (topbarColor && "active")}>
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
          <div className={"hamburger " + (menuOpen && "active")} onClick={handleClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={handleClick}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={handleClick}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Topbar
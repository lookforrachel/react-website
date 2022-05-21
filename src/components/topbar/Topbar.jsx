import "./topbar.scss"
import Favicon from "../../img/RY_favicon.png"
import {Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className = {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"><img src={Favicon} alt=""/></a>
          <div className="itemContainer">
            <a href="mailto: lookfor.rachel@gmail.com"><Mail className="icon"/></a>
            <span>lookfor.rachel@gmail.com</span>
          </div>
          
        </div>
        <div className="right">
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

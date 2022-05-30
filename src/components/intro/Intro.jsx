import "./intro.scss"
import Me from "../../img/22010017.JPG"
import {Mail, GitHub, LinkedIn, Twitter, KeyboardArrowDown} from "@material-ui/icons"
import { keys } from "@material-ui/core/styles/createBreakpoints"

const handleClick = () => {
    console.log("hello, i've been clicked")
    window.location.href="#projects";
}

const Intro = () => {
    return (
        <div className="i" id="intro">
            <div className="intro-container">
                <img src={Me} alt=""/>
                <div className="desc-container">
                    <p>I’m a curious and passionate,  self-taught developer with extensive design experience. I love breaking down complex problems and believe in solving them with empathy and user-centricity. I’m a fast learner, team player and love a good challenge.</p>
                </div>
                <div className="downWrapper">
                        <a href="#portfolio"><KeyboardArrowDown className="icon"/></a>
                </div>
                {/* <button onClick={handleClick} className="intro-btn">Projects</button> */}
          </div>
      </div>
    )
  }
  
  export default Intro
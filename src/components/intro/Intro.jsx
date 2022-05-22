import "./intro.scss"
import Me from "../../img/22010017.JPG"
import {Mail, GitHub, LinkedIn, Twitter, KeyboardArrowDown} from "@material-ui/icons"
import { keys } from "@material-ui/core/styles/createBreakpoints"

const Intro = () => {
    return (
        <div className="i" id="intro">
            <div className="intro-container">
                <img src={Me} alt="" />
                {/* <h1>Hello!</h1> */}
                <p>I’m a curious and passionate,  self-taught developer with extensive design experience. I love breaking down complex problems and believe in solving them with empathy and user-centricity. I’m a fast learner, team player and love a good challenge.</p>
                <button className="intro-btn">Projects</button>
          </div>
      </div>
    )
  }
  
  export default Intro
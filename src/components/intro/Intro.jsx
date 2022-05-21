import "./intro.scss"
import Me from "../../img/22010017.JPG"
import {GitHub, LinkedIn, Twitter, KeyboardArrowDown} from "@material-ui/icons"
import { keys } from "@material-ui/core/styles/createBreakpoints"

const Intro = () => {
    return (
        <div className="i" id="intro">
            <div className="i-left">
              <div className="i-left-wrapper">
                    <h2 className="i-intro">hello, I'm</h2>
                    <h2 className="i-name">Rachel Yee</h2>
                    <div className="i-title">
                      <div className="i-title-wrapper">
                          <div className="i-title-item">iOS Developer</div>
                          <div className="i-title-item">Web Developer</div>
                          <div className="i-title-item">Graphic Designer</div>
                          <div className="i-title-item">Videographer</div>
                          <div className="i-title-item">Photographer</div>
                      </div>
                    </div>
                    <div className="i-desc">I’m a curious and passionate,  self-taught developer with extensive design experience. I love breaking down complex problems and believe in solving them with empathy and user-centricity. I’m a fast learner, team player and love a good challenge.
                        </div>

                    <div className="iconWrapper">
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
                <div className="downWrapper">
                        <a href="#portfolio"><KeyboardArrowDown className="icon"/></a>
                    </div>
             </div>
          <div className="i-right">
              <div className="wrapper">
                <img src={Me} alt="" className="i-img" />
              </div>
          </div>
      </div>
    )
  }
  
  export default Intro
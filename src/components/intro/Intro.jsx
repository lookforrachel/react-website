import "./intro.css"
import Me from "../../img/22010017.JPG"

const Intro = () => {
    return (
      <div className="i">
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
                  <div className="i-desc">an insatiably curious,  self-taught developer with extensive design experience. I love breaking down complex problems and believe in solving them with empathy and user-centricity. I’m a fast learner, team player and love a good challenge.
                  </div>
              </div>
          </div>
          <div className="i-right">
             <img src={Me} alt="" className="i-img" />
          </div>
      </div>
    )
  }
  
  export default Intro
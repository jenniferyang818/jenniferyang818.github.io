import { Link } from "react-router-dom"
import "./Landing.css";

function Landing() {
    return (
      <div className="content">
        <div className="intro">
          <h1>JENNIFER YANG</h1>
          <p>Hi! I'm Jennifer. I'm a(n)... 
            <li>recent <b>UC Berkeley grad</b> w/ a Computer Science degree and minor in Data Science</li>
            <li>incoming <b>software engineer</b> at Amazon in AWS Cryptography</li> 
            <li>previous intern at <b>Amazon</b> (Summer 2022) & <b>Liberty Mutual</b> (Summer 2021)</li>
            <li><b>aspiring foodie </b> with a special love for pasta trying to shake her picky eater habits</li>
            <li>avid <b>adrenaline junkie</b> & roller coaster fan</li>
          </p>
        </div>
        
        <div className="buttons">
          <div>
            <Link to="/experience">
              <button class="button">
                Experience
              </button>
            </Link>
          </div>
          <h1>🍝</h1>
          <div>
            <Link to="/projects">
              <button class="button">
                Projects
              </button>
            </Link>
          </div>
          <h1>🍝</h1>
          <div>
            <Link to="/about">
              <button class="button">
                  Contact Me
                </button>
            </Link>
          </div>
       </div>
      </div>
    );
  }
  export default Landing;
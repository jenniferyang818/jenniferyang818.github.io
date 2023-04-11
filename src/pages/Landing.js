import { Link } from "react-router-dom"
import "./Landing.css";
import Header from "../components/Header.js"
import Experience from "../pages/Experience.js"

function handleScroll(props) {
  
}


function Landing() {

  const handleClickScroll = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

    return (
      <div className="content">
        <Header></Header>
        <div className="intro">
          <h1>JENNIFER YANG</h1>
          <p>Hi! I'm Jennifer. I'm a(n)...
            <li><b>UC Berkeley grad</b> w/ a Computer Science degree and minor in Data Science</li>
            <li>incoming <b>software engineer</b> at Amazon in AWS Cryptography</li> 
            <li>previous intern at <b>Amazon</b> (Summer 2022) & <b>Liberty Mutual</b> (Summer 2021)</li>
            <li><b>aspiring foodie </b> trying to shake her picky eater habits</li>
            <li>avid <b>adrenaline junkie</b> & roller coaster fan</li>
          </p>
        </div>
        
        <div className="buttons">
          <div>
            <button class="button" onClick={handleClickScroll}><span>Experience</span></button>
          </div>

          <div>
            <Link to="/projects">
              <button class="button">
                <span>Projects</span>
              </button>
            </Link>
          </div>

          <div>
            <Link to="/about">
              <button class="button">
                  <span>About Me</span>
                </button>
            </Link>
          </div>
       </div>
       <div id="experience"><Experience></Experience></div>
      </div>
    );
  }
  export default Landing;
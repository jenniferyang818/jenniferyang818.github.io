import { Link } from "react-router-dom"
import "./Landing.css";
import Experience from "../pages/Experience.js"
import Work from "../pages/Work.js"
import About from "../pages/About.js"
// to do: figure out how to do header on top or scrolling on side
// import Header from "../components/Header.js"

function Home() {

  // to do: figure out how to reuse this function 

  const handleHomeScroll = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };
  const handleExpScroll = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };
  const handleProjScroll = () => {
    const element = document.getElementById('Work');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };
  const handleAbtScroll = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className="home">
      <div className="header">
          <div>
            <button className="header-button" onClick={handleHomeScroll}><span>🏠 Home</span></button>
          </div>
          <div>
            <button className="header-button" onClick={handleExpScroll}><span>🗂 Experience</span></button>
          </div>
          <div>
            <button className="header-button" onClick={handleProjScroll}><span>💻 Work</span></button>
          </div>
          <div>
            <button className="header-button" onClick={handleAbtScroll}><span>👩‍💻 About Me</span></button>
          </div>
        </div>
        <div className="intro">
          <h1>JENNIFER YANG</h1>
          <p>👋 Hi! I'm Jennifer. I'm a(n)...
            <li><b>UC Berkeley grad</b> w/ a Computer Science degree and minor in Data Science</li>
            <li>incoming <b>software engineer</b> at Amazon in AWS Cryptography</li> 
            <li>former intern at <b>Amazon</b> (Summer 2022) & <b>Liberty Mutual</b> (Summer 2021)</li>
            <li><b>aspiring foodie </b> trying to shake her picky eater habits</li>
            <li>avid <b>adrenaline junkie</b> & roller coaster fan</li>
          </p>
          <div>
            <button className="button" onClick={handleExpScroll}></button>
          </div>
        </div>
    </div>
  );
}

function Landing() {
    return (
      <div className="landing">
        <div className="content">
         <div id="home">
          <Home></Home>
          </div>
          <div id="experience">
          <Experience></Experience>
          </div>
          <div id="Work">
          <Work></Work>
          </div>
          <div id="about">
          <About></About>
          </div>
        </div>
      </div>
    );
  }
  export default Landing;
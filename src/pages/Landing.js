// import { Link } from "react-router-dom"
import "./Landing.css";
import Experience from "../pages/Experience.js"
import Work from "../pages/Work.js"
import About from "../pages/About.js"
import skydive from "../pages/assets/skydive.JPG"
// to do: figure out how to do header on top or scrolling on side
// import Header from "../components/Header.js"

const handleGenericScroll = (event, id) => {
  const element = document.getElementById(id);
  if (element) {
      element.scrollIntoView({behavior: 'smooth'})
  }
}

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <p>☁ Jennifer Yang ☁</p>
        <button className="header-button" onClick={(e) => handleGenericScroll(e, 'home')}><span>Home</span></button>
        <button className="header-button" onClick={(e) => handleGenericScroll(e, 'experience')}><span>Experience</span></button>
        <button className="header-button" onClick={(e) => handleGenericScroll(e, 'work')}><span>Work</span></button>
        <button className="header-button" onClick={(e) => handleGenericScroll(e, 'about')}><span>About Me</span></button>
        {/* <button className="header-button" onClick={(e) => handleGenericScroll(e, 'home')}><span>🏠 Home</span></button>
        <button className="header-button" onClick={(e) => handleGenericScroll(e, 'experience')}><span>🗂 Experience</span></button>
        <button className="header-button" onClick={(e) => handleGenericScroll(e, 'work')}><span>💻 Work</span></button>
        <button className="header-button" onClick={(e) => handleGenericScroll(e, 'about')}><span>👩‍💻 About Me</span></button> */}
      </div>
    </div>
  )
}

function Home() {

  // to do: more spacing via chris, move the left sidebar more to the left
  // differentiate between ladning and the restt 

  return (
    <div className="home">
        <div className="intro">
          <img className="skydive" src={skydive} alt='jennifer skydive'></img>
          <div className="name">Hi! I'm Jennifer.</div>
          <br></br>
          <p><b>🛬 Welcome to my "landing" page!</b> I'm a(n)...</p> 
          <br></br>
            <p>
            <li><b>UC Berkeley grad</b> w/ a Computer Science degree and minor in Data Science</li>
            <li>incoming <b>software engineer</b> at Amazon in AWS Cryptography</li> 
            <li>former intern at <b>Amazon</b> & <b>Liberty Mutual</b></li>
            <li><b>aspiring foodie </b> trying to shake her picky eater habits</li>
            <li>avid <b>adrenaline junkie</b> & roller coaster fan</li>
            <li>work in progress in terms of making good puns</li>
          </p>
          <div>
            <button className="button" onClick={(e) => handleGenericScroll(e, 'experience')}></button>
          </div>
        </div>
    </div>
  );
}

function Landing() {
    return (
      <div className="landing">
        <Header></Header>
        <div className="content">
         <div id="home">
          <Home></Home>
          </div>
          <div id="experience">
          <Experience></Experience>
          </div>
          <div>
            <button className="button" onClick={(e) => handleGenericScroll(e, 'work')}></button>
          </div>
          <div id="work">
          <Work></Work>
          </div>
          <div>
            <button className="button" onClick={(e) => handleGenericScroll(e, 'about')}></button>
          </div>
          <div id="about">
          <About></About>
          </div>
        </div>
      </div>
    );
  }
  export default Landing;
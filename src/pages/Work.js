// import Header from "../components/Header.js";
import "./Work.css";


function Work() {
    return (
      <div className="body">
        <div className="proj">
          <h1>WORK</h1>
          <div id="awebot">
            {/* TODO: same line formatting like resume */}
            <div className="proj"><h2>AWEbot</h2></div>
            <div className="date"><h3>Node.js, Google Apps Script, Slack API</h3></div>
            <div className="tldr"><p>I worked in a team of 3 to develop an attendance and feedback Slackbot for a school club.
              The bot has event check in and feedback commands that send user input to a Google Spreadsheet via an Axios POST request. The bot
              is used by 50+ club members every week and used by club officers to gauge member attendance and event interest.</p></div>
          </div>

          <div id="innod">
            <div className="proj"><h2>Berkeley Legends Website Redesign</h2></div>
            <div className="date"><h3>Figma, React.js</h3></div>
            <div className="tldr"><p>As a member of Innovative Design's web team, I helped redesign and develop a new website for Berkeley Legends, 
              a student organization on campus. We used the provided Berkeley Legends Branding Guides to create a sleeker website design in Figma, and developed 
              the existing pages and a new "shop" page with React.js. <a href="https://legends.berkeley.edu/" target="_blank">Check out the new website here!</a></p></div>
          </div>
          <div id="civictech">
            <div className="proj"><h2>Food Pantry Prediction Model</h2></div>
            <div className="date"><h3>Google Apps Script, TensorFlow</h3></div>
            <div className="tldr"><p>I worked in a team of 6 to develop a project that would help a local food pantry
              in Berkeley predict their foot traffic. We performed data analysis on the historic food pantry statistics and developed a prediction model that would
              use historic pantry data, weather data, and census tracts to predict the number of pantry visitors. <a href="https://civictech-bfp.medium.net.vn/berkeley-food-pantry-ml-footfall-prediction-model-1ed46218385a?" target="_blank">Check out our Medium article here.</a></p></div>
          </div>
          <div id="clouds">
            <div className="proj"><h2>Quarantine Clouds</h2></div>
            <div className="date"><h3>HTML, CSS, Javascript</h3></div>
            <div className="tldr"><p>My final project for Web Design class, featuring the clouds I observed during my sophomore year in quarantine. <a href="https://jenniferyang818.github.io/quarantine-clouds/index.html" target="_blank">Browse the clouds here!</a></p></div>
          </div>
        </div>
      </div>
    );
  }
  export default Work;
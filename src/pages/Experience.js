// import Header from "../components/Header.js";
import "./Experience.css";


function Experience() {
    return (
      <div className="body">
        {/* <Header></Header> */}
        <div className="exp">
          <h1>EXPERIENCE</h1>
          <div id="amazon">
            {/* TODO: same line formatting like resume */}
            <div className="role"><h2>Software Development Engineering Intern, Amazon</h2></div>
            <div className="date"><h3>May 2022 - August 2022</h3></div>
            <div className="tldr"><p>I worked in AWS Cryptography, where I developed an Audit Queue system for locally saving 
              cryptographic certificates to prevent irrecoverable certificate loss due to user failure. I also created a background worker for automating
              and scheduling Dynamo database entry updates, to improve recovery after database failures. Both components were created in Java.</p></div>
          </div>

          <div id="lm">
            <div className="role"><h2>Techstart Software Engineering Intern, Liberty Mutual Insurance</h2></div>
            <div className="date"><h3>May 2021 - August 2021</h3></div>
            <div className="tldr"><p>I worked in the Products and Underwriting department. My team was developing AMR3 (Auto Model 
              Rebuild 3), a project intending to revamp the existing internal tool used by employees to issue car insurance policies. I worked on a new
              functionality that allowed employees to manually override information autofilled by a third party car quoting service. </p></div>
          </div>

          <div id="awe">
            <div className="role"><h2>Advisor, Co-President, Internal Vice President, Industrial Relations, Association of Women in EE&CS</h2></div>
            <div className="date"><h3>August 2019 - December 2022</h3></div>
            <div className="tldr"><p>AWE was a huge part of my college experience and I served multiple officer roles while in the club. As industrial relations,
              I served as a point of contact for company events and raised over $13,000 for the club. As Internal Vice President and Co-President, 
              I focused on fostering a welcoming environment within the club, amidst a tumultuous semester of online
              Zoom interactions and an equally as daunting transition into a post-pandemic semester back on campus. </p></div>
          </div>
        </div>
      </div>
    );
  }
  export default Experience;
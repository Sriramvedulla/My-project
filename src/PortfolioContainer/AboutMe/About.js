import React from "react";
import "./About.css";

function About() {
  return (
    <div className="abt-self">
      <div className="about-content">
        <div className="about-heading">
          <h2 className="abt-heading-sec">
            <span className="abt-main">about me</span>
            <span className="abt-main-sub">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </span>
          </h2>
        </div>
        <div className="about-mine">
          <div className="abt-mine">
            <h3 className="abt-mine-title">Get to know me!</h3>
            <div className="abt-mine-details">
              <p className="abt-mine-para">
                I'm a <strong>Frontend Web Developer</strong> building the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                <strong> Projects</strong> section.
              </p>
              <p className="abt-mine-para">
                I also like sharing content related to the stuff that I have
                learned over the years in <strong>Web Development</strong>. Feel
                free to Connect or Follow me on my{" "}
                <a href="https://www.linkedin.com/in/sriram-vedulla-8955a1251">
                  Linkedin
                </a>
                .
              </p>
              <p className="abt-mine-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong> Contact</strong> me.
              </p>
            </div>
          </div>
          <div className="about-skills">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-list">
              <div className="lists">HTML</div>
              <div className="lists">CSS</div>
              <div className="lists">JavaScript</div>
              <div className="lists">React Js</div>
              <div className="lists">SQL Basics</div>
              <div className="lists">MongoDB Basics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

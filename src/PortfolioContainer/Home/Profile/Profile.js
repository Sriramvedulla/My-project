import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/ramu.vedsriram">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/sri_ram_vedulla">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/SriramVedulla">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/sriram-vedulla-8955a1251">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'M <span className="highlighted-text">Sriram</span>
            </span>
          </div>
          {/* <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 📱",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product.
              </span>
            </span>
          </div> */}
          <div className="profile-options">
            <Link to="/contact">
              <button className="btn primary-btn"> Hire Me </button>
            </Link>
            <a href="Sriramvresume.pdf" download="Sriramvresume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
          <div class="home-hero-mouse">
            <div class="mouse"></div>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

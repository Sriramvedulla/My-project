import React from "react";
import "./FooterMain.css";
import "../Home/Profile/Profile.css";

function FooterMain() {
  return (
    <div className="main-footer">
      <div className="footer-section">
        <div className="footer-name">
          <h3 className="foot-head">Sriram Vedulla</h3>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="footer-media">
          <h3>Social Media</h3>
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
        </div>
      </div>
      <div className="footer-hr"></div>
      <div className="copyright">
        <p>
          &copy; Copyright 2023. Made by
          <b>SRIRAM VEDULLA</b>
        </p>
      </div>
    </div>
  );
}

export default FooterMain;

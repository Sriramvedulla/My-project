import React from "react";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import "./Home.css";
import About from "../AboutMe/About";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <Profile />
        <Footer />
      </div>
      <About />
    </div>
  );
}

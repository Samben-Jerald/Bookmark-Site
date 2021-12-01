import React from "react";
import '../style/hero.css'
import HeroImage from "../images/illustration-hero.svg";
import Button from "../Component/button";

const Hero = () => {
  return (
    <section>
      <div className="content-section">
        <h1 className="hero-header"> A Simple Bookmark Manager</h1>
        <p  className="hero-paragraph">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <Button className="hero-chrome-button">Get it on Chrome</Button>
        <Button className="hero-firefox-button">Get it on Firefox</Button>
      </div>
      <div className="heroImage-section">
      <span className="hero-background"></span>
        <img src={HeroImage} alt="HeroImage" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;

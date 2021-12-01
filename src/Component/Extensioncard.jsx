import React from "react";
import '../style/hero.css';
import '../style/ExtensionCard.css'
import Button from "./button";

const Extensioncard = (props) => {
  return (
    <div className={`extension-card-container`}>
      <img src={props.src} alt={props.alt}  className="browserImage"/>
      <div className="extension-Content">
        <h3>{props.browserName}</h3>
        <span>{props.version}</span>
      </div>
      <div className="extensioncard-button">
          <Button className="hero-chrome-button button-extra">{props.buttonText}</Button>
      </div>
    </div>
  );
};

export default Extensioncard;

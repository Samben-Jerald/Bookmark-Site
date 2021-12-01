import React from "react";
import '../style/footer.css'
import PageIcon from "../images/logo-bookmark-2.svg";
import FaceBookIcon from "../images/icon-facebook.svg";
import TwitterIcon from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-first-division">
      <div className="footer-main-logo">
        <img src={PageIcon} alt="logo" />
      </div>
      <div className="footer-options">
        <ul>
          <li>
            <a href="#">Feature</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      </div>
      <div className="footer-logo">
        <img src={FaceBookIcon} alt="facebookLogo" className="facebook-logo" />
        <img src={TwitterIcon} alt="TwitterLogo" className="twitter-logo" />
      </div>
    </div>
  );
};

export default Footer;

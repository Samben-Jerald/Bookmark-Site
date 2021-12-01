import React from "react";
import "../style/header.css";
import BookmarkIcon from "../images/logo-bookmark.svg";
import Button from "../Component/button";
import HambugerIcon from "../images/icon-hamburger.svg";
import CloseIcon from "../images/cancel-icon.png";

const Header = () => {
  const [hamburgerState, setHambugerState] = React.useState(false);
  return (
    <>
      <header>
        <div className="header-icon">
          <img src={BookmarkIcon} alt="bookmarkIcon" />
        </div>
        <div className="header-options">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Button>Login</Button>
            </li>
          </ul>
        </div>
      </header>

      <div className="mobile-view">
        <div>
          <img src={BookmarkIcon} alt="bookmarkIcon" />
        </div>
        <div
          className="hambuger"
          onClick={() => setHambugerState((prev) => !prev)}
        >
          {!hamburgerState ? (
            <img src={HambugerIcon} alt="hambuger-icon" />
          ) : (
            <div>
              <img src={CloseIcon} alt="close-icon" className="close-icon"/>
              <div className="options-container">
                <ul>
                  <li>
                    <a href="#">Features</a>
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
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

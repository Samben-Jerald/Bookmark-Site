import React from "react";
import "../style/questionDropdown.css";
import DownArrowIcon from "../images/icon-arrow.svg";
import UpArrowIcon from "../images/icon-uparrow.svg";

const QuestionDropdown = (props) => {
  const [dropState, setDropState] = React.useState(false);

  function arrowToggleHandler() {
    setDropState((prev) => !prev);
  }

  return (
    <div className="dropdown-container" onClick={arrowToggleHandler}>
      <div className="dropdown-heading">
        <h4 className="main-heading">{props.heading}</h4>
        <div className="dropdown-arrow-image">
          {!dropState ? (
            <img src={DownArrowIcon} alt="downarrow" />
          ) : (
            <img src={UpArrowIcon} alt="downarrow" />
          )}
        </div>
      </div>
      {dropState && (
        <div className="dropdown-content">
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionDropdown;

import React from "react";
import QuestionContents from "../Content/QuestionContents";
import QuestionDropdown from "../Component/QuestionDropdown";
import Button from '../Component/button'
import '../style/questionDropdown.css'
import '../style/hero.css'

const Questions = () => {
  return (
    <div className="dropdown-main-container">
      {QuestionContents.map((value) => {
        return (
          <QuestionDropdown
            key={value.id}
            heading={value.heading}
            content={value.content}
          />
        );
      })}
      <div className="question-button">
      <Button className="hero-chrome-button">More info</Button>
      </div>
    </div>
  );
};

export default Questions;

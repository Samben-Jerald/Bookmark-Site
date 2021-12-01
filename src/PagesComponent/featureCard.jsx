import React from "react";
import "../style/Features.css";

export const FeatureCard = () => {
  return (
    <div className="feature-container">
      <h1>Features</h1>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    </div>
  );
};

export const DownloadCardExtension = () => {
  return (
    <div className="feature-container">
      <h1>Download the extension</h1>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
    </div>
  );
};

export const FrequentlyAskedQuestions = () => {
  return (
    <div className="feature-container extra-class">
      <h1>Frequently Asked Questions</h1>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
    </div>
  );
};

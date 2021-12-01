import React from "react";
import "../style/tabDesign.css";
import Button from "../Component/button";
import TabDetails from "../Content/Tabdetails";
import '../style/hero.css'


const TabContent = () => {
  const [tabSelectionDetails, setTabSelectionDetails] = React.useState(0);

  const TabContentCard = React.useCallback((props) => {
    return (
      <div className="tab-container">
        <div className="tab-image">
          <img src={props.ImageSource} alt="FirstIcon" />
        </div>
        <div className="tab-description">
          <h1>{props.heading}</h1>
          <p>{props.description}</p>
          <Button className="hero-chrome-button">{props.buttonText}</Button>
        </div>
      </div>
    );
  }, []);

  const tabHandler = (id) => {
    setTabSelectionDetails(id);
  };

  return (
    <div className="full-tab-conatiner">
      <div className="tab-heading">
        {TabDetails.map((value, index) => {
          return (
            <span
              key={value.id}
              onClick={() => tabHandler(value.id)}
              style={{
                borderBottom:
                  index === tabSelectionDetails ? "solid 3px hsl(0, 94%, 66%)" : null,
              }}
            >
              {value.title}
            </span>
          );
        })}
      </div>
      {TabDetails.map((value, index) => {
        return (
          tabSelectionDetails === index && (
            <TabContentCard
              key={value.id}
              heading={value.heading}
              ImageSource={value.ImageSource}
              description={value.description}
              buttonText={value.buttonText}
            />
          )
        );
      })}
    </div>
  );
};

export default TabContent;

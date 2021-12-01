import React from "react";
import BrowserDetails from "../Content/BrowserDetails";
import Extensioncard from "../Component/Extensioncard";
import "../style/ExtensionCard.css";

const ExtensionBrowserCard = () => {
  return (
    <div className="extension-main-container">
      {BrowserDetails.map((value) => {
        return (
          <div className={`container_${value.id}`}>
            <Extensioncard
              key={value.id}
              src={value.imageSource}
              alt={value.altText}
              browserName={value.browserName}
              version={value.minimumVersion}
              buttonText={value.minimumVersion}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExtensionBrowserCard;

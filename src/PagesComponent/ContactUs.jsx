import React from "react";
import "../style/contactUs.css";
import Input from '../Component/input'
import Button from '../Component/button'
const ContactUs = () => {
  return (
    <div className="contactus-container">
        <div className="contactus-second-container">
      <div className="joined-members-count">
        <span>35,000+ already joined</span>
      </div>
      <div className="contactus-heading">
        <h1>Stay up-to-date with what we’re doing</h1>
      </div>
      <div className="contactus-information">
        <span className="input-span">
          <Input />
        </span>
        <span className="contact-us-button">
          <Button className="contact-us">Contact Us</Button>
        </span>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;

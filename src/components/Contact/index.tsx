import React from "react";

import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact me!</h2>
      <div className="contact-container">
        <div className="cont-left">
          <form>
            <span>Name:</span>
            <span>E-mail Address:</span>
            <span>Subject:</span>
            <span>Message:</span>
          </form>
        </div>
        <div className="cont-right"></div>
      </div>
    </section>
  );
};

export default Contact;

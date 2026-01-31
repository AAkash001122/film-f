import React from "react";
import "./style.css";

const Contact = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="contact-overlay">
      <div className="contact-modal">
        <button className="close-btn" onClick={onClose}>✖</button>

        <h2>Contact Us</h2>

        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Mobile Number" required />
          <textarea placeholder="Address" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

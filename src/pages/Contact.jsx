import React from "react";
import "./Styles.css";
import contactimg from "../assets/contact.jpeg";
import "./mobile_styles.css";

const Contact = () => {
  return (
    <div className="contact_main" id="contact">
      <div className="contact-us">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>
            Have a question or need assistance? Feel free to reach out to us.
          </p>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />

            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />

            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
            ></textarea>

            <button className="contactBtn" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>ai medical Center</strong> <br />
            OutSource Global <br />
            Academy Project Group_1 <br />
            Email: info@aimedcare.com <br />
            Phone: +234 (555) 123-4567
          </p>

          <div>
            <img
              src={contactimg}
              // alt="Image"
              // style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

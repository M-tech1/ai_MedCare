import React from "react";
import "./Styles.css";

const Contact = () => {
  return (
    // <div className='contact' id='contact'>Contact</div>
    <div className="contact-us" id="contact">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Have a question or need assistance? Feel free to reach out to us.</p>
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

          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Medical Center</strong> <br />
          123 Health Street <br />
          Cityville, Medical Country <br />
          Email: info@medicalcenter.com <br />
          Phone: +1 (555) 123-4567
        </p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

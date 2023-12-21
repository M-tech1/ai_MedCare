import React from "react";
import "./Styles.css";
import "./mobile_styles.css";
import logo from "../assets/MedEx.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are committed to providing high-quality healthcare services with
            compassion and excellence. Your health is our priority.
          </p>
          <img
            src={logo}
            style={{
              width: "10rem",
              height: "2rem",
              background: "white",
              margin: "30px",
            }}
          />
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            Medical Center <br />
            123 Health Street <br />
            Cityville, Medical Country <br />
            Email: info@medicalcenter.com <br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
        <div className="footer-section appointments">
          <h2>Appointments</h2>
          <p>
            Schedule your appointment today for personalized and attentive
            medical care.
          </p>
          <a href="#contact">
            <button className="btn-appointment">Schedule Now</button>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; aiMedCare Center 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

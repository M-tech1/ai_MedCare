import React from "react";
import "./Styles.css";

const Footer = () => {
  return (
    // <div className='footer'  id='footer' >Footer</div>
    // <footer className="footer" id="footer">
    //   <p>&copy; 2023 Your Company. All rights reserved.</p>
    // </footer>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are committed to providing high-quality healthcare services with
            compassion and excellence. Your health is our priority.
          </p>
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
          <button className="btn-appointment">Schedule Now</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; aiMedCare Center 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

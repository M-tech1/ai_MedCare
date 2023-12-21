import React from "react";
import "./Styles.css";
// import aiabout from "../assets/aibot.png";
import Medinjection from "../assets/Medinjection.png";
import { FaClinicMedical } from "react-icons/fa";
import { FaTruckMedical } from "react-icons/fa6";
// import Particle from "../components/Particle";
import "./mobile_styles.css";

const About = () => {
  return (
    <div className="container about_container" id="about">
      <div className="about_left_container">
        <img className="img_about" src={Medinjection} />
        <div className="left_container">
          <button> Register Now</button>
        </div>
      </div>

      <div className="about_right_container">
        <div className="right_text_content">
          <div className="right_text1">
            {" "}
            About Our services{" "}
            <div className="right_text2">top notch deliverables</div>
          </div>

          <p className="right_text3">
            aiMedCare can provide general medical information, such as
            explanations of medical terms, descriptions of illnesses, and first
            aid guidance
          </p>

          <p className="right_text3">
            Based on the symptoms provided, aiMedCare is able to offers a
            preliminary health assessment or suggests possible conditions. It
            provides information about common symptoms associated with those
            conditions.
          </p>

          <p className="right_text3">
            If a user describes symptoms that indicate a potentially
            life-threatening situation, the chatbot should emphasize seeking
            immediate medical attention
          </p>

          <div style={{ width: "100%", height: "2px", background: "grey" }}>
            <div style={{ width: "50%", height: "2px", background: "#26a0da" }}>
              {" "}
            </div>{" "}
          </div>
        </div>

        <div className="right_text_content2">
          <div className="right_content_sec1">
            <div className="right_content_icon">
              <FaClinicMedical size="30px" />
            </div>

            <div>Home Service</div>
            <p>quick delivery at ur door, no need stress at all</p>
          </div>

          <div className="right_content_sec2">
            <div className="right_content_icon2">
              <FaTruckMedical size="30px" />
            </div>

            <div>Home Service</div>
            <p>quick delivery at ur door, no need stress at all</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

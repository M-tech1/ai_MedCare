import React from "react";
import "./Styles.css";
import aiabout from "../assets/aibot.png";
import { FaClinicMedical } from "react-icons/fa";
import { FaTruckMedical } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about_container" id="about">
      <div className="about_left_container">
        <div className="left_container">
          <div className="left_container_text">
            {" "}
            <p> Expert system</p>
            <div>
              <p className="right_text3" style={{ paddingLeft: "40px" }}>
                we can recommend whether users should consult a healthcare
                professional
              </p>{" "}
            </div>
          </div>

          {/* <div> second content</div> */}
          <div className="about_us_bot">
            {" "}
            <img src={aiabout} />{" "}
          </div>
          <button> register now</button>
        </div>
      </div>

      <div className="about_right_container">
        <div className="right_text_content">
          <div className="right_text1">
            {" "}
            covid-19 vaccine{" "}
            <div className="right_text2">delivery services</div>
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

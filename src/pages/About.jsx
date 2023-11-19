import React from "react";
import "./Styles.css";
import aiabout from "../assets/aibot.png";

const About = () => {
  return (
    <div className="about_container" id="about">
      <div className="about_left_container">
        <div className="left_container">
          <div className="left_container_text">Updated Expert system</div>{" "}
          <p style={{ position: "absolute", top: "75px" }}>
            conneting you with remove help
          </p>
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
          <div>content 1 </div>
          <div>content 2</div>
          <div>content 3</div>
        </div>
        <div className="right_text_content2">
          <div>content 1</div>
          <div>content 2</div>
        </div>
      </div>
    </div>
  );
};

export default About;

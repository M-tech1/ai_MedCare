import React from "react";
import "./Styles.css";
import Header from "../components/Header";
import iaDocImg from "../assets/mdDOc.png";
import { FcNext } from "react-icons/fc";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* <Header/> */}
      <div className="home" id="home">
        <div className="main_home_container">
          <div className="text_container">
            <div className="home_text1"> Get Quick</div>
            <div className="typewriter">Medical Attention</div>
            {/* <h5 className="typewriter">Software Engineer</h5> */}
            <p className="home_paragram">
              employ the best ai health diagonistic system to help diagonize
              your health and welness, stay healthy today...
            </p>
            <button className="btn-start"> Get started</button>
          </div>

          <div className="botton_content">
            <div className="botimg">
              <img src={iaDocImg} />{" "}
            </div>

            <div className="infocontent">
              <div>
                <div className="infocontent_txt1">aiMedCare</div>
                <p style={{ color: "white", fontSize: "14px" }}>
                  content to the leading ai doctor{" "}
                </p>
              </div>

              <div className="infocontent_items">
                <div className="con1">
                  {" "}
                  <FaHandHoldingMedical size={30} color="white" />
                </div>
                <div className="con2">
                  <FaNotesMedical size={30} color="white" />
                </div>
              </div>
            </div>

            <div className="big_btn">
              <FcNext size={30} />
              <p>Schedule</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

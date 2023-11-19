import React from "react";
import "./Styles.css";
import Header from "../components/Header";
import iaDocImg from "../assets/mdDOc.png";

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
              Employ the best ai health diagonistic system to help diagonize
              your your health and welness today...
            </p>
            <button className="btn-start"> Get started</button>
          </div>

          <div className="botton_content">
            <div className="botimg">
              <img src={iaDocImg} />{" "}
            </div>

            <div className="nameing">
              <div>name</div>
              <div>some other tins like icons and all</div>
            </div>
            <div className="big_btn"> big click button</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

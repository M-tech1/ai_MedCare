// export default Navbar;
import React from "react";
import { useState } from "react";
import "./Styles.css";

const Nav = () => {
  const data = [
    { id: 1, link: "#", title: "Home" },
    { id: 2, link: "#about", title: "About" },
    { id: 3, link: "#contact", title: "contact" },
    { id: 4, link: "#chat", title: "Chat" },
  ];

  const [activeNav, setActiveNav] = useState("#");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="nav_container">
        <div className="logo">
          <a href="index.html" className="nav_logo">
            {" "}
            {/* <img src="" alt="logo" />{" "} */}
            <strong className="txt_logo"> aiMedCare</strong>
          </a>
        </div>
        <div>
          <ul className="nav_menu">
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title} </a>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="logs">UserName</div>
      </div>
    </nav>

    // <nav className="navbar">
    //   <div className="logo">ai_MedCare</div>
    //   <div className="menu">
    //     <a href="#home">Home</a>
    //     <a href="#about">About</a>
    //     <a href="#contact">Contact</a>
    //     <button onClick={handleLoginLogout} className="login-btn">
    //       {isLoggedIn ? "Logout" : "Login"}
    //     </button>
    //   </div>
    // </nav>
  );
};

export default Nav;

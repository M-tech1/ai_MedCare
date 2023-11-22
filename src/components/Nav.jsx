// export default Navbar;
import React from "react";
import { useState } from "react";
import "./Styles.css";

const Nav = () => {
  const data = [
    { id: 1, link: "#", title: "Home" },
    { id: 2, link: "#about", title: "About" },
    { id: 3, link: "#contact", title: "Contact" },
    { id: 4, link: "#chats", title: "Quick" },
  ];

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
        <div className="logs">
          UserName
          <button className="Navbtn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

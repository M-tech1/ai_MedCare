// export default Navbar;
import React from "react";
import { useState } from "react";
import "./Styles.css";
import "./mobile_styles.css";
import Login from "./Login";
import logo from "../assets/MedEx.png";
import { UserContext, useUserContext } from "../contexts/user";
import { Auth, EmailAuthCredential } from "firebase/auth";
import {
  auth,
  db,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
const Nav = () => {
  const { user } = useUserContext();

  const data = [
    { id: 1, link: "#", title: "Home" },
    { id: 2, link: "#about", title: "About" },
    { id: 3, link: "#contact", title: "Contact" },
    { id: 4, link: "#health_tips", title: "Health Tips" },
    // { id: 4, link: "#chats", title: "Quick" },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const auth = getAuth();

  return (
    <nav>
      <div className="nav_container">
        <div className="logo">
          <a href="index.html" className="nav_logo">
            <img className="Img_logo" src={logo} alt="logo" />
            {/* <strong className="txt_logo"> aiMedCare</strong> */}
          </a>
        </div>

        <div className="nav_container">
          <ul className="nav_menu">
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title} </a>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="logs">
          <strong style={{ textTransform: "capitalize" }}>
            {user?.displayName}{" "}
          </strong>

          {/* <button className="Navbtn">Login</button> */}
          <Login />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

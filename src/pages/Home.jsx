import { React, useState } from "react";
import "./Styles.css";
import "./mobile_styles.css";
// import Header from "../components/Header";
import iaDocImg from "../assets/mdDOc.png";
import { FcNext } from "react-icons/fc";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa";
import { FaCommentMedical } from "react-icons/fa6";
import Contact from "../pages/Contact";
import Login from "../components/Login";
import { Box, Button, Modal, Typography } from "@mui/material";
import logo from "../assets/MedEx.png";
import firebase from "firebase/compat/app";
import { UserContext, useUserContext } from "../contexts/user";
import {
  auth,
  db,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { user } = useUserContext();
  const [openSignup, setOpenSignup] = useState(false);
  const auth = getAuth();

  // handling new signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
    setOpenSignup(false);
  };

  // Show a success notification

  return (
    <>
      {/* <Header/> */}

      <div className="home" id="home">
        <div className="main_home_container">
          <div className="text_container">
            <div className="home_text1"> Get Quick</div>
            <div className="typewriter">Medical Attention</div>
            <p className="home_paragraph">
              Employ the best AI health diagnostic system to help diagnose your
              health and wellness. Stay healthy today!...
            </p>
            <div className="home-btn">
              <button
                className="btn-start"
                onClick={() => {
                  setOpenSignup(true);
                }}
              >
                Get started
              </button>
              <a href="#contact">
                <button className="btn-app">Book Appointment</button>
              </a>
            </div>
          </div>

          <div className="botton_content">
            <div className="botimg">
              <img src={iaDocImg} />{" "}
            </div>
            <div className="infocontent">
              <div className="txt1">
                <div className="infocontent_txt1">
                  Hi{" "}
                  <span>
                    <strong style={{ textTransform: "capitalize" }}>
                      {user?.displayName}
                    </strong>
                  </span>
                  , how're you feeling?
                </div>
                <p style={{ color: "black", fontSize: "14px" }}>
                  Your well-being is of utmost importance, and we're here to
                  assist you. Please feel comfortable sharing your thoughts and
                  concerns with us.
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
                <div className="con2">
                  <a href="#chats">
                    {" "}
                    <FaCommentMedical size={30} color="white" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="big_btn">
              <a href="#chats">
                <FcNext size={30} />
              </a>
              <p>Check</p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={openSignup}
        onClose={() => {
          setOpenSignup(false);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "25rem",
            height: "25rem",
            bgcolor: "white",
            border: "2px solid #1e3845ff",
            borderRadius: "5px",
            boxShadow: 24,

            p: 2,
          }}
        >
          <Typography variant="h5" component="h5">
            <form
              style={{
                alignItems: "centen",
                justifyContent: "center",
                marginTop: "50px",
              }}
              className="app_signup"
              variant="contained"
            >
              <center>
                <img className="modal_logo" src={logo} alt="" />
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />

                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <Button
                  style={{ fontSize: "15px" }}
                  variant="contained"
                  type="submit"
                  onClick={handleSignUp}
                >
                  Sign up
                </Button>
              </center>
            </form>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Home;

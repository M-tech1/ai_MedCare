import React, { useState, useEffect, useContext } from "react";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// import { auth, db } from "firebase/auth";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./login_style.css";
import logo from "../assets/MedEx.png";
import {
  auth,
  db,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { UserContext, useUserContext } from "../contexts/user";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [openSignup, setOpenSignup] = useState(false);
  const [opensignin, setOpenSignin] = useState(false);

  const auth = getAuth();

  // handling new signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { user, setUser } = useUserContext();

  const Login = () => {
    signInWithEmailAndPassword(auth, email, password).catch((e) =>
      alert(e.message)
    );
    setOpenSignin(false);
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        setUser(authuser);
        console.log("authUser", authuser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      {user ? (
        <>
          <Button
            style={{ fontSize: "10px", backgroundColor: "#1e3845ff" }}
            variant="contained"
            onClick={() => {
              auth.signOut();
            }}
          >
            Log out{" "}
          </Button>
        </>
      ) : (
        <>
          <Button
            style={{ fontSize: "8px", backgroundColor: "#1e3845ff" }}
            variant="contained"
            onClick={() => {
              setOpenSignin(true);
            }}
          >
            Login
          </Button>
          <span>&nbsp; &nbsp;</span>
          {/* <Button
            style={{ fontSize: "8px" }}
            variant="contained"
            onClick={() => {
              setOpenSignup(true);
            }}
          >
            Sign Up
          </Button> */}
        </>
      )}

      {/* signin modal  */}

      <Modal
        open={opensignin}
        onClose={() => {
          setOpenSignin(false);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "25rem",
            height: "25rem",
            bgcolor: "white",
            border: "2px solid #1e3845ff",
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
                  style={{ fontSize: "15px", backgroundColor: "#1e3845ff" }}
                  variant="contained"
                  type="submit"
                  onClick={Login}
                >
                  Login
                </Button>
                <br />
                <Button
                  color="secondary"
                  type="submit"
                  style={{ fontSize: "10px" }}
                >
                  Forgot Password
                </Button>
              </center>
            </form>
          </Typography>
        </Box>
      </Modal>

      {/* signup modal  */}
      {/* <Modal
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
                  onClick={Login}
                >
                  Sign up
                </Button>
              </center>
            </form>
          </Typography>
        </Box>
      </Modal> */}
    </div>
  );
};

export default Login;

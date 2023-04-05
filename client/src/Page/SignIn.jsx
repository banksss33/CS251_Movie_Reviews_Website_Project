import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import "../component/style/SignIn.css";
import "boxicons";
import { redirect } from "react-router-dom";

function SignIn() {
  const [regValid, setRegValid] = useState([]);

  const [showNickname, setShowNickname] = useState("");

  useEffect(() => {
    const showName = () => {
      setShowNickname(localStorage.getItem("yourName"));
    };

    const getEmail = () => {
      axios.get("http://localhost:3001/registerValid").then((response) => {
        setRegValid(response.data);
      });
    };

    const getAccount = () => {
      axios.get("http://localhost:3001/signIn").then((response) => {
        setSignInValid(response.data);
      });
    };

    getAccount();
    getEmail();
    showName();
  }, []);

  // valid Email
  const [emailMessage, setEmailMessage] = useState("");

  const validateEmail = (event) => {
    const enteredEmail = event.target.value;
    const isEmailUsed = regValid.some((val) => val.Email === enteredEmail);
    if (isEmailUsed) {
      setEmailMessage("This Email already used");
    } else {
      setEmailMessage("");
    }
  };

  // Valid Nickname
  const [nickNameMessage, setNickNameMessage] = useState("");

  const validateNiackname = (event) => {
    const enteredNickName = event.target.value;
    const isNickNameUsed = regValid.some(
      (val) => val.Nickname === enteredNickName
    );
    if (isNickNameUsed) {
      setNickNameMessage("This nick name already used");
    } else {
      setNickNameMessage("");
    }
  };

  // Valid Nickname
  const [usernameMessage, setUsernameMessage] = useState("");

  const validateUsername = (event) => {
    const enteredUsername = event.target.value;
    const isUsernameUsed = regValid.some(
      (val) => val.Username === enteredUsername
    );
    if (isUsernameUsed) {
      setUsernameMessage("This username already used");
    } else {
      setUsernameMessage("");
    }
  };

  // Sliding between Login and Register
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false);
  };

  // login

  const [signInValid, setSignInValid] = useState([]);

  const [usernameS, setUsernameS] = useState("");
  const [passwordS, setPasswordS] = useState("");

  const onchangeUsername = (event) => {
    setUsernameS(event.target.value);
  };

  const onchangePassword = (event) => {
    setPasswordS(event.target.value);
  };

  const validateLogIn = () => {
    const loginSuccess = signInValid.some(
      (val) => val.username === usernameS && val.password === passwordS
    );
    if (loginSuccess) {
      const loggedInUser = signInValid.find(
        (val) => val.username === usernameS
      );
      localStorage.setItem("yourName", loggedInUser.Nickname);
    } else {
      localStorage.setItem("yourName", "");
    }
  };


  // Sign out
  const signOut = () => {
    localStorage.setItem("yourName", "");
  }

  return (
    <div>
      <div className="background"></div>
      <div className="containerS">
        <div className="content">
          <h2 className="logo">CornMeter</h2>

          <div className="text-sci">
            <h2>
              Welcome
              <br />
              {localStorage.getItem("yourName") === "" ? (
                <p>SignIn</p>
              ) : (
                <h2>{showNickname}</h2>
              )}
            </h2>
            <p>For review or rate movie on this web</p>
          </div>
        </div>

        {/* Sign In OR Log out */}

        {localStorage.getItem("yourName") === "" ? (
          <div className={`logreg-box ${isRegisterActive ? "active" : ""}`}>
            {/* Sign In */}
            <div
              className={`form-box login ${!isRegisterActive ? "active" : ""}`}
            >
              <form action="#">
                <h2>Sign In</h2>

                <div className="input-box">
                  <span className="icon"></span>
                  <input
                    type="text"
                    id="username"
                    value={usernameS}
                    onChange={onchangeUsername}
                    required
                  />
                  <label>username</label>
                </div>

                <div className="input-box">
                  <span className="icon"></span>
                  <input
                    type="password"
                    id="password"
                    value={passwordS}
                    onChange={onchangePassword}
                    required
                  />
                  <label>Password</label>
                </div>

                <button type="submit" className="btnS" onClick={validateLogIn}>
                  Sign In
                </button>

                <div className="login-register">
                  <p>
                    Don't have an account?{" "}
                    <a
                      href="#"
                      className="register-link"
                      onClick={handleRegisterClick}
                    >
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>

            {/* Register */}
            <div
              className={`form-box register ${
                isRegisterActive ? "active" : ""
              }`}
            >
              <form action="#">
                <h2>Register</h2>

                <div className="input-box">
                  <input
                    id="email"
                    type="email"
                    required
                    onChange={validateEmail}
                  />
                  <label>Email</label>
                  <p>{emailMessage}</p>
                </div>

                <div className="input-box">
                  <input id="fname" type="text" required />
                  <label>first name</label>
                </div>

                <div className="input-box">
                  <input id="lname" type="text" required />
                  <label>last name</label>
                </div>

                <div className="input-box">
                  <input
                    id="nickname"
                    type="text"
                    required
                    onChange={validateNiackname}
                  />
                  <label>nick name</label>
                  <p>{nickNameMessage}</p>
                </div>

                <div className="input-box">
                  <input
                    id="username"
                    type="text"
                    required
                    onChange={validateUsername}
                  />
                  <label>username</label>
                  <p>{usernameMessage}</p>
                </div>

                <div className="input-box">
                  <input id="password" type="password" required />
                  <label>password</label>
                </div>

                <button type="submit" className="btnS">
                  Sign Up
                </button>

                <div className="login-register">
                  <p>
                    already have an account?{" "}
                    <a
                      href="#"
                      className="login-link"
                      onClick={handleLoginClick}
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="logreg-box">
            
            <div className="form-box">
            <h2>Sign out</h2>
              <button type="submit" className="btnS" onClick={signOut}>
                  Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;

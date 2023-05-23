import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import "../component/style/SignIn.css";
import "boxicons";
import { Link, redirect } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import Swal from "sweetalert2";

function SignIn() {
  // Register
  const [regValid, setRegValid] = useState([]);
  const [showNickname, setShowNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState(null);

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
    setEmail(enteredEmail);
    const isEmailUsed = regValid.some((val) => val.Email === enteredEmail);
    if (isEmailUsed) {
      setEmailMessage("This Email already used");
    } else {
      setEmailMessage("");
    }

  }

  // Valid Nickname
  const [nickNameMessage, setNickNameMessage] = useState("");

  const validateNiackname = (event) => {
    const enteredNickName = event.target.value;
    setNickname(enteredNickName);
    const isNickNameUsed = regValid.some(
      (val) => val.Nickname === enteredNickName
    );
    if (isNickNameUsed) {
      setNickNameMessage("This nick name already used");
    } else {
      setNickNameMessage("");
    }
  };

  // Valid username
  const [usernameMessage, setUsernameMessage] = useState("");

  const validateUsername = (event) => {
    const enteredUsername = event.target.value;
    setUsername(enteredUsername);
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


  const loginSuccessPop = () => {
    Swal.fire({
      title: 'Successfully',
      text: 'Your Welcome',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        handleRefresh();
      }
    });
  };

  const loginFailPop = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No matching username or password',
    })
  }

  const registerFailPop = () => {
    Swal.fire({
      icon: 'error',
      title: 'Can not crate your account',
      text: 'email or nickname or username has been used',
    })
  }

  const validateLogIn = () => {
    const loginSuccess = signInValid.some(
      (val) => val.username === usernameS && val.password === passwordS
    );
    if (loginSuccess) {
      const loggedInUser = signInValid.find(
        (val) => val.username === usernameS
      );
      localStorage.setItem("yourName", loggedInUser.Nickname);
      loginSuccessPop();
      console.log("Login successful")
    } else {
      localStorage.setItem("yourName", "");
      loginFailPop();
      console.log("mismatch account or password")
    }

  };

    const handleRefresh = () => {
      window.location.reload();
    };

  // Sign out
  const signOut = () => {
    localStorage.setItem("yourName", "");
    handleRefresh();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailMessage === "" && nickNameMessage === ""){
      try {
        // Call registration API with form data
        const response = await axios.post("http://localhost:3001/Register", {
          account: { username, password },
          profile: { email, firstname, lastname, nickname },
        });
  
        // Handle successful registration
        console.log(response.data);
      } catch (error) {
        // Handle registration error
        console.log(error.response.data);
        setError("Error registering user!");
      }
      handleRefresh();
    } else {
      registerFailPop();
    }

  };

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
              <form onSubmit={handleSubmit}>
                <h2>Register</h2>

                <div className="input-box">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={validateEmail}
                  />
                  <label>Email</label>
                  <p>{emailMessage}</p>
                </div>

                <div className="input-box">
                  <input
                    id="fname"
                    type="text"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <label>first name</label>
                </div>

                <div className="input-box">
                  <input
                    id="lname"
                    type="text"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <label>last name</label>
                </div>

                <div className="input-box">
                  <input
                    id="nickname"
                    type="text"
                    required
                    value={nickname}
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value) }
                  />
                  <label>username</label>
                  <p>{usernameMessage}</p>
                </div>

                <div className="input-box">
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <label>password</label>
                </div>

                <button type="submit" className="btnS" >
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
            <div className="form-box flex-column">
              <div style={{ padding: "50px" }}>
                <h2>Sign Out</h2>
              </div>
              <LinkContainer to="/" className="btnS w-60" onClick={signOut}>
                <Link className="signOutText">Sign out</Link>
              </LinkContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;

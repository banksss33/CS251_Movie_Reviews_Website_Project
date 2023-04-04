import React, { useEffect, useState } from "react";
import axios from "axios";

import "../component/style/SignIn.css";
import 'boxicons'

function SignIn() {
  // valid Email
  const [emailMessage, setEmailMessage] = useState("");
  const [emailValid, setEmailValid] = useState([]);

  const validateEmail = (event) => {
    const enteredEmail = event.target.value;
    const isEmailUsed = emailValid.some((val) => val.Email === enteredEmail);
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
    const isNickNameUsed = emailValid.some((val) => val.Nickname === enteredNickName);
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
    const isUsernameUsed = emailValid.some((val) => val.Username === enteredUsername);
    if (isUsernameUsed) {
      setUsernameMessage("This username already used");
    } else {
      setUsernameMessage("");
    }
  };  

  useEffect(() => {
    const getEmail = () => {
      axios.get("http://localhost:3001/registerValid").then((response) => {
        setEmailValid(response.data);
      });
    };

    getEmail();
  }, []);


  // Sliding between Login and Register
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false);
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
              <span>Sign In</span>
            </h2>
            <p>For review or rate movie on this web</p>
          </div>
        </div>

        <div className={`logreg-box ${isRegisterActive ? "active" : ""}`}>
          {/* Sign In */}
          <div
            className={`form-box login ${!isRegisterActive ? "active" : ""}`}
          >
            <form action="#">
              <h2>Sign In</h2>

              <div className="input-box">
                <span className="icon"></span>
                <input type="text" required />
                <label>username</label>
              </div>

              <div className="input-box">
                <span className="icon"></span>
                <input type="password" required />
                <label>Password</label>
              </div>

              <button type="submit" className="btnS">
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
            className={`form-box register ${isRegisterActive ? "active" : ""}`}
          >
            <form action="#">
              <h2>Register</h2>

              <div className="input-box">
                <input id="email" type="email" required onChange={validateEmail}/>
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
                <input id="nickname" type="text" required onChange={validateNiackname}/>
                <label>nick name</label>
                <p>{nickNameMessage}</p>
              </div>

              <div className="input-box">
                <input id="username" type="text" required onChange={validateUsername}/>
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
                  <a href="#" className="login-link" onClick={handleLoginClick}>
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

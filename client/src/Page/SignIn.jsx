
import React, { useState } from "react";

import "../component/style/SignIn.css";
import "../component/componentFile/logreg"

function SignIn() {
  
  return (
    <div>
      <div className="background"></div>
      <div className="containerS">
        <div className="content">
          <h2 className="logo">CornMeter</h2>

          <div className="text-sci">
            <h2>Welcome<br/><span>Sign In</span></h2>
            <p>For review or rate movie on this web</p>
          </div>

        </div>

        <div className="logreg-box">

{/* Sign In */}
          <div className="form-box login">
            <form action="#">
              <h2>Sign In</h2>

              <div className="input-box">
                <span className="icon"></span>
                <input type="text" required/>
                <label>username</label>
              </div>

              <div className="input-box">
                <span className="icon"></span>
                <input type="password" required/>
                <label>Password</label>
              </div>

              <button type="submit" className="btnS">Sign In</button>

              <div className="login-register">
                <p>Don't have an account? <a href="#" className="register-link">Register</a></p>
              </div>

            </form>
          </div>


{/* Register */}
          <div className="form-box register">
            <form action="#">
              <h2>Register</h2>

              <div className="input-box">
                <input type="email" required/>
                <label>Email</label>
              </div>

              <div className="input-box">
                <input type="text" required/>
                <label>first name</label>
              </div>

              <div className="input-box">
                <input type="text" required/>
                <label>last name</label>
              </div>

              <div className="input-box">
                <input type="text" required/>
                <label>username</label>
              </div>

              <div className="input-box">
                <input type="password" required/>
                <label>Password</label>
              </div>

              <button type="submit" className="btnS">Sign Up</button>

              <div className="login-register">
                <p>already have an account? <a href="#" className="login-link">Sign In</a></p>
              </div>

            </form>
          </div>

        </div>
      </div>
      <script src="../component/componentFile/SignIn.js"></script>
    </div>
  );
}

export default SignIn;

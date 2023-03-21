import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../component/SignIn.css"

function SignIn({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      style={{
        padding: "100px",
        paddingBottom: "450px",
        background: "#3f3f42"
      }}
    >
      {/* container */}
      <center>
        <div class='box'>
          <span class="borderLine"></span>
          <Form>
            <h2>Sign In</h2>
            {/* Username Input*/}
            <div class="inputBox">
              <input type="text" required="required"></input>
              <span>Username</span>
              <i></i>
            </div>

            {/* Password Input */}
            <div class="inputBox">
              <input type="password" required="required"></input>
              <span>Password</span>
              <i></i>
            </div>

            {/* Register */}
            <div class="links">
            <p>
              no account?
              <a variant="primary" onClick={handleShow} className="me-2">
                register
              </a>
            </p>
            </div>

            {/* Submit button*/}
            <Button type="submit" class="btn btn-outline-warning">Login</Button>

          </Form>
        </div>
        </center>

        {/* Very Impotant */}
        {/* test database */}
        {/* <ShowAccount/> */}


        {/* pop up register */}
        <Offcanvas
          show={show}
          onHide={handleClose}
          {...props}
          placement="bottom"
          style={{
            maxHeight: "80vh",
            height: "80vh",
            width: "50%",
            padding: "40px",
            borderRadius: "10px 10px 0 0",
            position: "fixed",
            marginLeft: "25%",
            bottom: "0",
            transform: "translateY(-50%)",
            transform: `translateY(${show ? 0 : "100%"})`,
            transition: "transform 0.83s ease-in-out",
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Register</Offcanvas.Title>
          </Offcanvas.Header>
          {/* register */}
          <Offcanvas.Body>
            <div>
            <Form>
              {/* Username Input*/}
              <div class="row">
                <div class="row g-3">
                <div class="col-sm-5">
                  <label class="form-label" for="registerEmail">Email</label>
                  <input type="email" id="registerEmail" class="form-control" placeholder="Email" aria-label="City"/>
                </div>
                <div class="col-sm-5">
                  <label class="form-label" for="registerfName">First name</label>
                  <input type="text" id="registerfName" class="form-control" placeholder="Enter your first name" aria-label="City"/>
                </div>
                <div class="col-sm-5">
                  <label class="form-label" for="registerlName">Last name</label>
                  <input type="text" id="registerlName" class="form-control" placeholder="Enter your last name" aria-label="City"/>
                </div>
                <div class="col-sm-5">
                  <label class="form-label" for="registerUsername">Username</label>
                  <input type="text" id="registerUsername" class="form-control" placeholder="Enter your username" aria-label="City"/>
                </div>
                <div class="col-sm-5">
                  <label class="form-label" for="registerPassword">Password</label>
                  <input type="text" id="registerPassword" class="form-control" placeholder="Enter your password" aria-label="City"/>
                </div>
                <div class="col-sm-5">
                  <label class="form-label" for="registerCPassword">Confirm password</label>
                  <input type="text" id="registerCPassword" class="form-control" placeholder="Comfirm password" aria-label="City"/>
                </div>
                <div class="col-sm-5">
                  <label class="form-label" for="registerNickname">Nick name</label>
                  <input type="text" id="registerNickname" class="form-control" placeholder="Enter your nick name" aria-label="City"/>
                </div>

              </div>
              </div>

              {/* Submit Button */}
              <Button type="submit">
                Submit
              </Button>
            </Form>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
    </div>
  );
}

export default SignIn;

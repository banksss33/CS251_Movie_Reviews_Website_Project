import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


function SignIn({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
  
      <div style={{
        padding : '100px',
        paddingBottom : '200px',
        backgroundColor: 'rgb(0,22,22)'
        }}>
            {/* container */}
            <Container style={{
                backgroundColor : '#FFF',
                padding : '40px',
                width : '50%'
            }}> 
                <p style={{textAlign : 'center'}}>Sign In</p>
                <Form>
                    {/* Username Input*/}
                    <Form.Group className="mb-3" controlId="formUername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="Text" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                        wrong username
                        </Form.Text>
                    </Form.Group>

                    {/* Password Input */}
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <center>
                    <p>no account?<a variant="primary" onClick={handleShow} className="me-2">
                        register
                    </a></p>
                </center>

                {/* pop up register */}
                <Offcanvas show={show} onHide={handleClose} {...props}placement="bottom"
                    style={{
                        maxHeight: '80vh',
                        height: '80vh',
                        width: '50%',
                        padding : '40px',
                        borderRadius: '10px 10px 0 0',
                        position: "fixed",
                        marginLeft: "25%",
                        bottom: "0",
                        transform: "translateY(-50%)",
                        transform: `translateY(${show ? 0 : '100%'})`,
                        transition: 'transform 0.83s ease-in-out'

                    }}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Register</Offcanvas.Title>
                    </Offcanvas.Header>
                    {/* register */}
                    <Offcanvas.Body>
                        <Form>
                            {/* Username Input*/}
                            <Form.Group className="mb-3" controlId="RegisterEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                this email already use
                                </Form.Text>
                            </Form.Group>

                            {/* Password Input */}
                            <Form.Group className="mb-3" controlId="formFirstname">
                                <Form.Label>first name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formLastname">
                                <Form.Label>last name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formUername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="Text" placeholder="Enter username" />
                                <Form.Text className="text-muted">
                                wrong username
                                </Form.Text>
                            </Form.Group>

                            {/* Password Input */}
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            {/* Confirm Password Input */}
                            <Form.Group className="mb-3" controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>

                            {/* Nick name Input */}
                            <Form.Group className="mb-3" controlId="formNickname">
                                <Form.Label>Nick name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your nick name" />
                            </Form.Group>

                            {/* Submit Button */}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
      </div>

  );
}
  


export default SignIn;

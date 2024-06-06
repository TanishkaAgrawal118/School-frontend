import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import backgroundImage from "../images/stud6.jpeg";
import { Paper } from "@mui/material";

const Login = () => {
  const logo = new URL("../images/school.png", import.meta.url);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          overflowX: "hidden",
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <img src={logo} className="login-logo" alt="logo"></img>
        </div>

        <Container
          className="d-flex justify-content-center align-items-center"
          // style={{ height: "100vh" }}
        >
          <Paper elevation={3} className="login">
            <div className="login p-4">
              <h4 className="text-center">Login</h4>
              <Container>
                <Form>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username/email"
                      className="mb-1"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="mb-1"
                    />
                  </Form.Group>
                  <Form.Check className="mb-4 mt-3">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label htmlFor="rememberMe">
                      Remember me
                    </Form.Check.Label>
                  </Form.Check>
                  <Button
                    type="submit"
                    className="login-btn"
                    style={{ backgroundColor: "#083344", padding: "2px" }}
                  >
                    LOGIN
                  </Button>
                </Form>
              </Container>
            </div>
            <div>
              <Row>
                <Col lg={4}></Col>
                <Col lg={4}></Col>
                <Col lg={4}></Col>
              </Row>
            </div>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default Login;

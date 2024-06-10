import { Paper } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginAs = ({ onRoleSelect }) => {
  const admin = new URL('../images/admin.jpg', import.meta.url);
  const faculty = new URL('../images/faculty.jpg', import.meta.url);
  const student = new URL('../images/student.jpg', import.meta.url);
  console.log('LoginAs received onRoleSelect:', onRoleSelect);
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(`/login/${role}`);
  };
  return (
    <>
      <div style={{ backgroundColor: "#f0fdf4", overflowX:"hidden",alignItems:"center",justifyContent:"center", display:"flex"}}>
        <Container >
        <Row>
          <Col lg={3} >
            <Paper elevation={3} className="login-as" onClick={() => handleRoleSelect('admin')} >
            <div className="login-content">
              <h4>Login as Admin</h4>
              <img src={admin} alt="admins" className="login-logo" />
            </div>
              
            </Paper>
          </Col>
          <Col lg={3} >
            <Paper elevation={3} className="login-as" onClick={() => handleRoleSelect('Faculty')}>
            <div className="login-content">
              <h4>Login as Faculty</h4>
              <img src={faculty} alt="admins" className="login-logo" />
            </div>
            </Paper>
          </Col>
          <Col lg={3} >
            <Paper elevation={3} className="login-as" onClick={() => handleRoleSelect('student')}>
            <div className="login-content">
              <h4>Login as Student</h4>
              <img src={student} alt="admins" className="login-logo" />
            </div>
            </Paper>
          </Col>
        </Row>
        </Container>
       
      </div>
    </>
  );
};

export default LoginAs;

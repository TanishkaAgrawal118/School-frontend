import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Paper } from '@mui/material';
import { studentRegister } from '../ApiSerives';

const AddStudent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        className: "",
        password: "",
        section: "",
        rollNum: "",
        phone: ""
    });

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, className, password, section, rollNum, phone } = formData;
        try {
                const data = { name, email, className, password, section, rollNum, phone };
                const response = await studentRegister(data);
                console.log('Student registered successfully:', response.data);
                alert("Student saved successfully");
        } catch (error) {
            console.error(error);
            alert("Failed to save student");
        }
    };
    const token = localStorage.getItem("token");

    if (!token) {
      return null; // If no token, don't render the sidebar
    }
  return (
    <>
        <AdminSidebar/>
        <Container className='content-container'>
        <div className='add-head'>
                <h5>Add Student</h5>
            </div>
            <Paper elevation={2} className="content-paper">
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" onChange={handleOnChange} name='name' value={formData.name}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={handleOnChange} name='email' value={formData.email}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Class</Form.Label>
                                <Form.Control type="text" onChange={handleOnChange} name='className' value={formData.className}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" onChange={handleOnChange} name='password' value={formData.password}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                        <Form.Group>
                                <Form.Label>Section</Form.Label>
                                <Form.Control type="text" onChange={handleOnChange} name='section' value={formData.section}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Roll Number</Form.Label>
                                <Form.Control type="text" onChange={handleOnChange} name='rollNum' value={formData.rollNum}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" onChange={handleOnChange} name='phone' value={formData.phone}></Form.Control>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" style={{ margin: "10px", padding: "6px" }} type='submit'>Save Student</Button>
                </form>
            </Paper>
        </Container>
        
    </>
  )
}

export default AddStudent;

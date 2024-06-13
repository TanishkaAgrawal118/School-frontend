import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Paper } from '@mui/material';
import { facultyRegister } from '../ApiSerives';

const AddFaculty = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, phone } = formData;
        try {
                const data = { name, email, password, phone };
                const response = await facultyRegister(data);
                console.log('Faculty registered successfully:', response.data);
                alert("Faculty saved successfully");
        } catch (error) {
            console.error(error);
            alert("Failed to save faculty");
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
                <h5>Add Faculty</h5>
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
                           
                            
                        </Col>
                        <Col lg={6}>
                        <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" onChange={handleOnChange} name='phone' value={formData.phone}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" onChange={handleOnChange} name='password' value={formData.password}></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" style={{ margin: "10px", padding: "6px" }} type='submit'>Save Faculty</Button>
                </form>
            </Paper>
        </Container>
    </>
  )
}

export default AddFaculty

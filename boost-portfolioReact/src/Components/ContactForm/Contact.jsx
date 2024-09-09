import React, { useState } from 'react';
import { Row, Col, Form, Button, Container, Image, Accordion, FormControl, FormLabel, FormText  }  from "react-bootstrap";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
        file: null
      });
    
      const [showModal, setShowModal] = useState(false);
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
          setFormData({ ...formData, [name]: files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form data submitted:', formData);
        setShowModal(true);
      };
    
      const handleClose = () => setShowModal(false);
    

    return (
<>

<Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <ContactModal showModal={showModal} handleClose={handleClose} />
    </>
    )

}
export default Contact;
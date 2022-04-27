import React from 'react'
import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

export default function Contact() {
  return (
    <div className='contact-container'>
      <h1 className='text-light'>Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-light'>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
        <Form.Label className='text-light'>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          <Form.Label className='text-light'>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="555-123-4567" />
          <Form.Label className='text-light'>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='text-light'>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}
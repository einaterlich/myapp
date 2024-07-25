import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from './Button';
import './FormComponent.css';

const FormComponent = ({ formData, fields, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    {fields.map((field, index) => (
      <Form.Group className="mb-3" controlId={`formBasic${field.name}`} key={index}>
        <div className="row">
          <div className="col-12">
            <Form.Label>{field.label}</Form.Label>
          </div>
          <div className="col-12">
            <Form.Control
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className='footer-input'
            />
          </div>
        </div>
      </Form.Group>
    ))}
    <Button buttonStyle='btn--outlineWhite' buttonSize='btn--large' type='submit'>
      Submit
    </Button>
  </Form>
);

export default FormComponent;

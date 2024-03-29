import React from 'react';
import { Container, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useState } from 'react';
/* import DividerComp from '../../../components/articles/DividerComp'; */
import HeadingArtComp from '../HeadingArtComp';
import { ArrowLeft } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';  

export default function CreateArticles() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <HeadingArtComp />
      <Container fluid className='py-5 bg-primary'>
        <div className='container my-5 bg-secondary p-5 rounded-4 shadow'>

      <NavLink to="/articles" className="text-primary fs-5 fw-semibold text-decoration-none"><ArrowLeft /> Indietro</NavLink>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Titolo <span className='text-primary'>*</span></Form.Label>
              <Form.Control required type="text" placeholder="Aggiungi un titolo..." />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Topic <span className='text-primary'>*</span></Form.Label>
              <Form.Control required type="text" placeholder="Inserisci un argomento..." />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomFile">
              <Form.Label>Carica un'immagine</Form.Label>
              <Form.Control type="file" accept="image/*" required />
              <Form.Control.Feedback type="invalid">
                Please choose an image.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} xs="12" controlId="validationCustom03">
              <Form.Label>Descrizione <span className='text-primary'>*</span></Form.Label>
              <Form.Control as="textarea" className='textarea' rows={3} placeholder="Inserisci una descrizione..." required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check required label="Accetto i termini e le condizioni" feedback="You must agree before submitting." feedbackType="invalid" />
          </Form.Group>
          <Button className='btn btn-warning' type="submit">Crea articolo!</Button>
        </Form>

        </div>
      </Container>
     {/*  <DividerComp /> */}
    </>
  );
}

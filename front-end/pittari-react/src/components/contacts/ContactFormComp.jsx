import { useState } from 'react';
import { Container, Form, Row, InputGroup, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function ContactFormComp() {

    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
        if (form.checkValidity() === true) {
            navigate('/');
        }
    };
    

  return (
    <>
    <Container className='p-5'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nome e Cognome<span className='text-danger'>*</span></Form.Label>
            <Form.Control
                required
                type="text"
            />
            <Form.Control.Feedback>Perfetto!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
            <Form.Control
                required
                type="email"
            />
            <Form.Control.Feedback>Perfetto!</Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Descrizione problema <span className='text-danger'>*</span></Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
                Aggiungi una descizione valida
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Form.Group className="mb-3">
            <Form.Check
            required
            label="Accetto i termini e le condizioni"
            feedback="Devi accettare prima di inviare"
            feedbackType="invalid"
            />
        </Form.Group>
        <Button type="button" onClick={handleSubmit}>Invia</Button>
        </Form>
    </Container>
    </>
  )
}

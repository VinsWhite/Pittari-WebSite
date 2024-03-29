import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Registration() {
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
            <div className='bg-primary-emphasis m-0 p-5'>
                <Container className='my-5 bg-secondary p-5 rounded-4 shadow'>
                    <h2>Registrati!</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom02">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your surname"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid surname.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="validationCustomEmail">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustomPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* Aggiungi un campo nascosto per il ruolo fisso 'user' */}
                        <input type="hidden" name="role" value="user" />
                        <Button variant='warning' type="submit">Registrati</Button>
                    </Form>
                </Container>
            </div>
        </>
    );
}

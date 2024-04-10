import React from 'react'
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import { loginUserSuccess } from '../../state/slice/usersSlice';

export default function PasswordReset() {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
            await axios.get("/sanctum/csrf-cookie");
            const response = await axios.post("/passwordReset", {
                email: email,
            });
            navigate('/login');
            console.log(response.data); 
        } catch (error) {
            setError(error.response.data.message);
        }
    }
    

  return (
        <>
            <div className='bg-primary-emphasis m-0 p-5'>
                <Container className='my-5 bg-secondary p-5 rounded-4 shadow'>
                    <h2>Resetta password!</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="validationCustomEmail">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Inserisci la tua email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Per favore inserisci un email valida
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Button variant='warning' type="submit">Invia</Button>
                        {error && <div className="text-danger mt-2">{error}</div>}
                    </Form>
                    <div className='text-end'>
                    <button onClick={() => navigate(-1)} className="text-dark fw-semibold text-decoration-underline bg-transparent border-0">Torna indietro</button>
                    </div>
                </Container>
            </div>
        </>
  )
}

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import scrollToTop from '../../assets/functions/scrollToTop';
import { useSelector } from 'react-redux';

export default function Registration() {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.users.token !== null); 

    useEffect(() => {
      scrollToTop();
    }, [])
    
    useEffect(() => {
        if (isLoggedIn) {
          navigate('/');
        }
      }, [isLoggedIn, navigate]);
    
    if (isLoggedIn) {
        return null; 
    }

    const validateName = (value) => {
        if (value.length > 40) {
            return "Il nome non può superare i 40 caratteri";
        }
        return "";
    };

    const validateSurname = (value) => {
        if (value.length > 40) {
            return "Il cognome non può superare i 40 caratteri";
        }
        return "";
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return "Per favore inserisci un'email valida";
        }
        return "";
    };

    const validatePassword = (value) => {
        if (value.length < 6) {
            return "La password deve contenere almeno 6 caratteri";
        }
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
        if (!passwordRegex.test(value)) {
            return "La password deve contenere almeno un carattere speciale e un numero";
        }
        return "";
    };

    const validateConfirmPassword = (value) => {
        if (value !== password) {
            return "Le password non corrispondono";
        }
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // verifica che le password corrispondano
        if (password !== confirmPassword) {
            setError("Le password non corrispondono");
            return;
        }

        try {
            await axios.get("/sanctum/csrf-cookie");
            const response = await axios.post("/register", {
                name: name,
                surname: surname,
                email: email,
                password: password,
                password_confirmation: confirmPassword,
                role: "user"
            });
            navigate('/login');
            console.log(response.data); // risposta del backend
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <>
            <div className='bg-primary-darker m-0 p-5'>
                <Container className='my-5 bg-secondary p-5 rounded-4 shadow'>
                    <h2>Registrati!</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Inserisci il tuo nome"
                                    isInvalid={validateName(name)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {validateName(name)}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom02">
                                <Form.Label>Cognome</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    placeholder="Inserisci il tuo cognome"
                                    isInvalid={validateSurname(surname)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {validateSurname(surname)}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
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
                                    isInvalid={validateEmail(email)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {validateEmail(email)}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustomPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Inserisci la tua password"
                                required
                                isInvalid={validatePassword(password)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {validatePassword(password)}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustomConfirmPassword">
                            <Form.Label>Conferma Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Conferma la tua password"
                                required
                                isInvalid={validateConfirmPassword(confirmPassword)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {validateConfirmPassword(confirmPassword)}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant='primary' type="submit">Registrati</Button>
                        {error && <div className="text-danger mt-2">{error}</div>}
                    </Form>
                    <div className='text-end'>
                        <NavLink to='/login' className='text-dark'>Ti sei già registrato?</NavLink>
                    </div>
                </Container>
            </div>
        </>
    );
}

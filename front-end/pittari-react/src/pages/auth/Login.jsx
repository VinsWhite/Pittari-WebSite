import React from 'react';
import { Container, Form, Row, Col, InputGroup, Button, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import { loginUserSuccess } from '../../state/slice/usersSlice';

export default function Login() {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
    
        try {
            await axios.get("/sanctum/csrf-cookie");
            const response = await axios.post("/login", {
                email: email,
                password: password,
            });

            const authToken = response.data.token;

            localStorage.setItem('token', authToken);
            dispatch(loginUserSuccess({ user: response.data.userData.name, token: authToken, role: response.data.userData.role }));
            /* console.log(response.data); 
            console.log(response.data.userData.role)
            console.log(response.data.userData.name) */
            setLoading(false);
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setLoading(false);
                setError("Email o password sbagliate");
            } else {
                setLoading(false);
                setError("Si è verificato un errore durante il login. Riprova più tardi.");
            }
            /* console.error(error); */
        }
    }
    

  return (
        <>
            <div className='bg-primary-darker m-0 p-5'>
                <Container className='my-5 bg-secondary p-5 rounded-4 shadow'>
                    <h2>Accedi! {loading && 
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    } </h2>
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
                        <Form.Group className="mb-3" controlId="validationCustomPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Inserisci la tua password"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Per favore inserisci la tua password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant='warning' type="submit">Accedi</Button>
                        {error && <div className="text-danger mt-2">{error}</div>}
                    </Form>
                    <div className='text-end d-flex flex-column mt-5'>
                        <NavLink to='/password-reset' className='text-dark'>Hai dimenticato la password?</NavLink>
                        <NavLink to='/register' className='text-dark'>Non sei ancora registrato?</NavLink>
                    </div>
                </Container>
            </div>
        </>
  );
}

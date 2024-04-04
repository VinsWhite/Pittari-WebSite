import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from '../../api/axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // campo FONDAMENTALE, mi ha fatto sbagliare un sacco
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        // verifica che le password corrispondono
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
      }

    return (
        <>
            <div className='bg-primary-emphasis m-0 p-5'>
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
                                />
                                <Form.Control.Feedback type="invalid">
                                    Per favore inserisci un nome valido.
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
                                />
                                <Form.Control.Feedback type="invalid">
                                    Inserisci un cognome valido.
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
                        {/* campo per la conferma della password */}
                        <Form.Group className="mb-3" controlId="validationCustomConfirmPassword">
                            <Form.Label>Conferma Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Conferma la tua password"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Le password non corrispondono
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant='warning' type="submit">Registrati</Button>
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

import React from 'react';
import { Container, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useState } from 'react';
/* import DividerComp from '../../../components/articles/DividerComp'; */
import HeadingArtComp from '../../../components/articles/HeadingArtComp';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';

export default function CreateArticles() {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.currentTarget;

      if (form.checkValidity() === false) {
          e.stopPropagation();
          setValidated(true);
          return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("topic", topic);
      formData.append("description", description);
      formData.append("image", image);

      try {
          await axios.get("/sanctum/csrf-cookie");
          const response = await axios.post("/articles", formData);
          console.log(response.data); 
          navigate('/'); 
      } catch (error) {
          setError(error.response.data.message);
      }
  };

  const validateTitle = (value) => {
    if (value.trim() === "") {
      return "Il titolo non può essere vuoto";
    }
    if (value.length <= 20) {
      return "Il titolo deve essere più lungo di 20 caratteri";
    }
    return "";
  }
  
  const validateDescription = (value) => {
    if (value.trim() === "") {
      return "La descrizione non può essere vuota";
    }
    if (value.length <= 150) {
      return "La descrizione deve essere più lunga di 150 caratteri";
    }
    return "";
  }

  return (
      <>
      <HeadingArtComp />
        <Container className='my-5 bg-secondary p-5 rounded-4 shadow'>
          <p className=' position-fixed bottom-0 end-0 m-3 p-2 bg-warning fw-semibold rounded-4 shadow'>AREA RISERVATA</p>
            <h2>Crea articolo</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="title">
                    <Form.Label column sm="2">Titolo <span className='text-primary'>*</span></Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Inserisci un titolo"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                          {validateTitle(title)}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="topic">
                    <Form.Label column sm="2">Topic <span className='text-primary'>*</span></Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Inserisci un topic come 'cultura'"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Per favore inserisci un topic.
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="description">
                    <Form.Label column sm="2">Descrizione <span className='text-primary'>*</span></Form.Label>
                    <Col sm="10">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Inserisci il corpo dell'articolo"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                          {validateDescription(description)}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="image">
                    <Form.Label column sm="2">Immagine</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <Form.Control.Feedback type="invalid">
                            Scegli un immagine
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Button variant="warning" type="submit">Invia</Button>
                {error && <div className="text-danger mt-2">{error}</div>}
            </Form>
        </Container>
      </>
  );
}

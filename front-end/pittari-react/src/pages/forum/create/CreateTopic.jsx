import React from 'react';
import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { NavLink, useParams, useNavigate } from 'react-router-dom';  
import axios from '../../../api/axios';
import HeadingTopComp from '../../../components/forum/HeadingTopComp';

export default function CreateTopic() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (event) => { 
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    try {
      await axios.get("/sanctum/csrf-cookie");

      const response = await axios.post('/post', {
        title: form.title.value,
        context: form.context.value,
        topic_id: id
      }, {
        headers: {
          'X-XSRF-TOKEN': getCookieValue('XSRF-TOKEN')
        }
      });

      // eliminando dal sessionStorage le informazioni sui topics e sui posts, viene poi effettuata nuovamente la chiamata ajax, aggiornando i componenti con i nuovi post
      sessionStorage.removeItem("topics");
      sessionStorage.removeItem("allPosts");
      sessionStorage.removeItem(`topic_${id}`)
      
      // Reindirizza l'utente alla pagina DetailTopic con il parametro del nuovo post nell'URL
      navigate(`/forum/topics/${id}?newPost=${response.data.id}`);
    } catch (error) {
      console.error('Errore durante la creazione dell\'argomento:', error);
      if (error.response) {
        console.error('Dettagli dell\'errore:', error.response.data);
      }
    }
  };

  function getCookieValue(name) {
    const cookie = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookie ? cookie.pop() : '';
  }

  return (
    <>
      <HeadingTopComp />
      <Container fluid className='py-5 bg-primary shadow'>
        <div className='container my-5 bg-secondary p-5 rounded-4 shadow'>
          <NavLink to={`/forum/topics/${id}`}  className="text-primary fs-5 fw-semibold text-decoration-none"><ArrowLeft /> Indietro</NavLink>
          <button onClick={() => navigate(-1)} className="text-secondary fs-5 fw-semibold text-decoration-none bg-transparent border-0"><ArrowLeft /> Indietro</button>

          <Form noValidate onSubmit={(event) => handleSubmit(event)}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Titolo <span className='text-primary'>*</span></Form.Label>
                <Form.Control required type="text" name="title" placeholder="Aggiungi un titolo..." />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} xs="12" controlId="validationCustom03">
                <Form.Label>Contenuto <span className='text-primary'>*</span></Form.Label>
                <Form.Control as="textarea" name='context' className='textarea' rows={3} placeholder="Inserisci un contenuto..." required />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button className='btn btn-primary' type="submit">Pubblica</Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

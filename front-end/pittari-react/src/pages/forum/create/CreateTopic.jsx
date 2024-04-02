import React from 'react';
import { Container, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useState } from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';
import { NavLink, useParams } from 'react-router-dom';  
import HeadingTopComp from '../../../components/forum/HeadingTopComp';
import { useSelector } from 'react-redux';
import axios from '../../../api/axios'
import { useEffect } from 'react';

export default function CreateTopic() {
  const [validated, setValidated] = useState(false);
  const userId = useSelector(state => state.users.id);
  const { topicId } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
  
    try {
      await axios.get("/sanctum/csrf-cookie");
  
      await axios.post('/post', {
        title: form.title.value,
        content: form.content.value,
        user_id: userId,
        topic_id: topicId
      }, {
        headers: {
          'X-XSRF-TOKEN': getCookieValue('XSRF-TOKEN') 
        }
      });
  
      window.location.href = '/forum';
    } catch (error) {
      console.error('Errore durante la creazione dell\'argomento:', error);
    }
  };
  
  function getCookieValue(name) {
    const cookie = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookie ? cookie.pop() : '';
  }

  return (
    <>
      <HeadingTopComp />
      <Container fluid className='py-5 bg-primary'>
        <div className='container my-5 bg-secondary p-5 rounded-4 shadow'>

      <NavLink to="/forum" className="text-primary fs-5 fw-semibold text-decoration-none"><ArrowLeft /> Indietro</NavLink>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Titolo <span className='text-primary'>*</span></Form.Label>
              <Form.Control required type="text" placeholder="Aggiungi un titolo..." />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} xs="12" controlId="validationCustom03">
              <Form.Label>Contenuto <span className='text-primary'>*</span></Form.Label>
              <Form.Control as="textarea" name='content' className='textarea' rows={3} placeholder="Inserisci un contenuto..." required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button className='btn btn-primary' type="submit">Pubblica</Button>
        </Form>
        <input type="hidden" name="user_id" value={userId}></input>
        <input type="hidden" name="topic_id" value={topicId}></input>
        </div>
      </Container>
    </>
  )
}

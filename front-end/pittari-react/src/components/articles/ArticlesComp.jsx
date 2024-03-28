import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setArticles } from '../../state/slice/articlesSlice';
import axios from '../../api/axios';
import { Search } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';  

import defaultImage from '../../assets/img/defaultImage.jpg'; // Immagine di default in caso l'articolo non abbia un'immagine

import { Container, Row, Col } from 'react-bootstrap';

export default function ArticlesComp() {
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/articles');
        dispatch(setArticles(response.data)); // Aggiorna lo stato degli articoli con i dati ottenuti dalla chiamata
      } catch (error) {
        console.error('Errore durante il recupero degli articoli:', error);
      }
    };

    fetchArticles();
  }, [dispatch]); 

  // Funzione per tagliare la descrizione e aggiungere "..." se è troppo lunga
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className='p-5 bg-primary-darker'>
      <Container>

        <NavLink to="/articles/create" className="btn btn-warning text-dark fw-semibold">Aggiungi articolo</NavLink>

        <div className='d-flex align-items-center justify-content-center'>
            <Search className='me-2 text-light fs-4' />
            <input className="form-control w-50 my-4" type="search" placeholder="Cerca..." aria-label="Search" />
        </div>
        <Row className="text-light">
          {articles.map(article => (
            <Col key={article.id} md={4}>
              <div className="article d-flex flex-column align-items-center p-3 shadow">
                {article.image ? (
                  <img src={`http://localhost:8000${article.image}`} alt="articolo immagine" />
                ) : (
                  <img src={defaultImage} alt="Immagine predefinita" />
                )}
                <h2 className='mt-3'>{article.title}</h2>
                <p>{truncateDescription(article.description, 150)}</p> {/* Taglia la descrizione a 150 caratteri */}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

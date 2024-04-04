import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setArticles } from '../../state/slice/articlesSlice';
import axios from '../../api/axios';
import { Search } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';  

import defaultImage from '../../assets/img/defaultImage.jpg'; // Immagine di default in caso l'articolo non abbia un'immagine
import caricamento from '../../assets/img/paperNews.jpg';

import { Container, Row, Col } from 'react-bootstrap';

export default function ArticlesComp() {
  const articles = useSelector(state => state.articles);
  const [searchInput, setSearchInput] = useState(''); // stato locale per la ricerca
  const [filteredArticles, setFilteredArticles] = useState([]); // stato locale per gli articoli che sono stati filtrati 
  const [loading, setLoading] = useState(true); // stato locale per il caricamento
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/articles');
        dispatch(setArticles(response.data)); // Aggiorna lo stato degli articoli con i dati ottenuti dalla chiamata
        setFilteredArticles(response.data); // settiamo gli articoli filtrati
        setLoading(false); 
      } catch (error) {
        console.error('Errore durante il recupero degli articoli:', error);
        setLoading(false); 
      }
    };

    fetchArticles();
  }, [dispatch]); 

  if (loading) {
    return (
      <>
        <Container fluid className='bg-primary-darker p-5'>
          <div className='d-flex align-items-center justify-content-center'>
              <Search className='me-2 text-light fs-4' />
              <input 
                className="form-control w-50 my-4" 
                type="search" 
                placeholder="Cerca..." 
                aria-label="Search"
              />
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={caricamento} className='loadingImage loading rounded-circle my-4' alt="caricamento" />
            <h4 className='text-center text-light fw-semibold loading'>Caricamento...</h4>
          </div>
        </Container>
      </>
    );
  }

  // Funzione per tagliare la descrizione e aggiungere "..." se è troppo lunga
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  // ricerca degli articoli 
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase(); // tutto minuscolo
    setSearchInput(searchTerm); 

    // filtraggio
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm) || // Cerca sia per titolo che descrizione che topic
      article.description.toLowerCase().includes(searchTerm) ||
      article.topic.toLowerCase().includes(searchTerm) 
    );

    setFilteredArticles(filtered); 
  };

  return (
    <div className='p-5 bg-primary-darker'>
      <Container>

        <NavLink to="/articles/create" className="btn btn-warning text-dark fw-semibold">Aggiungi articolo</NavLink>

        <div className='d-flex align-items-center justify-content-center'>
            <Search className='me-2 text-light fs-4' />
            <input 
              className="form-control w-50 my-4" 
              type="search" 
              placeholder="Cerca..." 
              aria-label="Search"
              value={searchInput}
              onChange={handleSearch} // evento onChange per gestire la ricerca
            />
        </div>
        <Row className="text-light">
          {filteredArticles.map(article => (
            <Col key={article.id} md={4}>
              <NavLink to={`/article/${article.id}`} className="nav-link-custom">
                <div className="article d-flex flex-column align-items-center p-3 shadow rounded-3">
                  {article.image ? (
                    <img src={`http://localhost:8000${article.image}`} alt="articolo immagine" />
                  ) : (
                    <img src={defaultImage} alt="Immagine predefinita" />
                  )}
                  <h2 className='mt-3'>{article.title}</h2>
                  <p>{truncateDescription(article.description, 150)}</p> {/* Taglia la descrizione a 150 caratteri */}
                  <p>{article.topic}</p>
                </div>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

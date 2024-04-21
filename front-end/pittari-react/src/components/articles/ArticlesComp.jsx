import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setArticles } from '../../state/slice/articlesSlice';
import axios from '../../api/axios';
import { ArrowClockwise, Search, Trash } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';  
import stock from '../../assets/functions/stock';
import defaultImage from '../../assets/img/defaultImage.jpg'; // Immagine di default in caso l'articolo non abbia un'immagine
import caricamento from '../../assets/img/paperNews.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';
import scrollToTop from '../../assets/functions/scrollToTop';

export default function ArticlesComp() {
  const articles = useSelector(state => state.articles);
  const [searchInput, setSearchInput] = useState(''); // stato locale per la ricerca
  const [filteredArticles, setFilteredArticles] = useState(articles); // stato locale per gli articoli che sono stati filtrati 
  const [loading, setLoading] = useState(!articles.length); // stato locale per il caricamento
  const [stockPhrase, setStockPhrase] = useState('');
  const dispatch = useDispatch();
  const userRole = localStorage.getItem('role');

  useEffect(() => {
    if (!articles.length) {
      const fetchArticles = async () => {
        try {
          const response = await axios.get('/articles');
          dispatch(setArticles(response.data)); 
          setFilteredArticles(response.data);
          setLoading(false); 
          // salvo gli articoli nella sessionStorage
          sessionStorage.setItem('articles', JSON.stringify(response.data));
        } catch (error) {
          /* console.error('Errore durante il recupero degli articoli:', error); */
          setLoading(false); 
        }
      };

      fetchArticles();
    } else {
      setLoading(false);
    }
  }, [dispatch, articles.length]); 

  useEffect(() => {
    setStockPhrase(stock());
  }, []);

  // funzione per tagliare la descrizione e aggiungere "..." se è troppo lunga
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  // ricerca degli articoli aggiornato (dopo aver implementato la pagina non andava)
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase(); // tutto minuscolo
    setSearchInput(searchTerm); 

    // Filtraggio
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm) || // cerca sia per titolo che descrizione che topic
      article.description.toLowerCase().includes(searchTerm) ||
      article.topic.toLowerCase().includes(searchTerm) 
    );

    setFilteredArticles(filtered); 
  };

  // viene eseguita nuova la chiamata fetch per eseguire una sorta di refresh senza refreshare la pagina
  const handleRefresh = async () => {
    scrollToTop();
    try {
      setLoading(true);
      const response = await axios.get('/articles');
      dispatch(setArticles(response.data)); 
      setFilteredArticles(response.data);
      setLoading(false);
      sessionStorage.setItem('articles', JSON.stringify(response.data));
    } catch (error) {
      console.error('Errore durante il recupero degli articoli:', error);
      setLoading(false); 
    }
  };
  
  const handleDeleteArticle = async (articleId) => {
    try {
      const confirmation = window.confirm('Sei sicuro di voler eliminare questo articolo?');
  
      if (confirmation) {
        const token = localStorage.getItem('token');
        await axios.delete(`/deleteArticle/${articleId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        setFilteredArticles(prevState => prevState.filter(article => article.id !== articleId));
        scrollToTop();
        try {
          setLoading(true);
          const response = await axios.get('/articles');
          dispatch(setArticles(response.data)); 
          setFilteredArticles(response.data);
          setLoading(false);
          sessionStorage.setItem('articles', JSON.stringify(response.data));
        } catch (error) {
          console.error('Errore durante il recupero degli articoli:', error);
          setLoading(false); 
        }
      }
      } catch (error) {
        /* console.error('Errore durante l\'eliminazione dell\'articolo:', error); */
      }
  };
  


  if (loading) {
    return (
      <>
        <Container fluid className='bg-primary-darker p-5'>
          <div className='d-flex align-items-center justify-content-center'>
              <Search className='me-2 text-light fs-4' />
              <input 
                className="form-control w-50 my-4" 
                type="text" 
                placeholder="Cerca..." 
                aria-label="Search"
              />
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={caricamento} className='loadingImage loading rounded-circle my-4' alt="caricamento" />
            <p className='text-light opacity-75'>{stockPhrase}</p>
          </div>
        </Container>
      </>
    );
  }

  return (
    <div className='p-5 bg-primary-darker'>
      <Container>

        {userRole === 'admin' && ( // Mostra il pulsante solo se il ruolo dell'utente è "admin"
          <NavLink to="/articles/create" className="btn btn-warning text-dark fw-semibold">Aggiungi articolo</NavLink>
        )}

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
        <Button className='shadow text-center' variant='light' onClick={handleRefresh}><ArrowClockwise /></Button>
        <Row className="text-light">
          {filteredArticles.map(article => (
            <Col key={article.id} md={4}>
              <div className='position-relative'>
              {userRole === 'admin' && (
                <Trash onClick={() => handleDeleteArticle(article.id)} className='position-absolute text-warning trashIcon top-0 end-0 m-1 fs-4 shadow' />
              )}
                <NavLink to={`/article/${article.id}`} className="nav-link-custom">
                  <div className="article d-flex flex-column align-items-center p-3 shadow rounded-3 mt-3">
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
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

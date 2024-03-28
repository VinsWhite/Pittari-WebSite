import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setArticles } from '../../state/slice/articlesSlice';
import axios from '../../api/axios';

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

  return (
    <div className='p-5 bg-primary-darker'>
      <h2 className='text-secondary h1 fw-semibold'>Articoli disponibili</h2>
      <ul className='text-light'>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

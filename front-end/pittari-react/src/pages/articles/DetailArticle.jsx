import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import defaultImage from '../../assets/img/defaultImage.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import DividerComp from '../../components/articles/DividerComp';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import axios from '../../api/axios'; // Importa axios per effettuare la chiamata AJAX

export default function DetailArticle() {
    const { id } = useParams();
    const articles = useSelector(state => state.articles);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios.get(`/articles/${id}`).then(response => {
            setArticle(response.data);
            console.log(response.data)
        }).catch(error => {
            console.error('Errore durante il recupero dell\'articolo:', error);
        });
    }, [articles, id]);

    if (!article) {
        return <div>Articolo non trovato</div>;
    }

    return (
        <div className='detailArticle bg-primary-darker py-5 text-light'>
            <Container className='pb-5'>
            <NavLink to="/articles" className="text-secondary fs-5 fw-semibold text-decoration-none"><ArrowLeft /> Indietro</NavLink>
                <h2 className='my-3 text-center fw-semibold'>{article.title}</h2>
                <Row>
                    <Col sm={12} lg={6} className='text-center pb-lg-3'>
                        <img src={article.image ? `http://localhost:8000${article.image}` : defaultImage} alt="Immagine articolo" />
                    </Col>
                    <Col sm={12} lg={6}>
                        <p>{article.description}</p>
                    </Col>
                </Row>
                <p className='mt-4'>TOPIC: {article.topic}</p>
            </Container>
            <DividerComp />
        </div>
    );
}

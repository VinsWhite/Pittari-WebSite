import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../api/axios';
import { setTopics } from '../../state/slice/topicsSlice';
import { NavLink } from 'react-router-dom';
import { Person, ChatLeft, ArrowClockwise } from 'react-bootstrap-icons';
import formatDate from '../../assets/functions/formatDate';
import stock from '../../assets/functions/stock';

import caricamento from '../../assets/img/fuji.jpg';

export default function TopicsComp() {
    const topics = useSelector(state => state.topics);
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(10); // Numero di post visibili inizialmente
    const [stockPhrase, setStockPhrase] = useState('');
    const dispatch = useDispatch();
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    const automaticRefresh = () => {
        sessionStorage.removeItem('topics');
        sessionStorage.removeItem('allPosts');
    }

    useEffect(() => {
        const intervalId = setInterval(automaticRefresh, 60000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        const storedTopics = sessionStorage.getItem('topics');
        if (storedTopics) {
            dispatch(setTopics(JSON.parse(storedTopics)));
        } else {
            const fetchTopics = async () => {
                try {
                    const response = await axios.get('/topics');
                    dispatch(setTopics(response.data));
                    sessionStorage.setItem('topics', JSON.stringify(response.data));
                } catch (error) {
                    console.error('Errore durante il recupero dei topics:', error);
                }
            };

            fetchTopics();
        }
    }, [dispatch]);

    useEffect(() => {
        const storedPosts = sessionStorage.getItem('allPosts');
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts));
        } else {
            const fetchPosts = async () => {
                try {
                    const response = await axios.get('/allPosts');
                    const sortedPosts = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                    setPosts(sortedPosts);
                    sessionStorage.setItem('allPosts', JSON.stringify(response.data));
                } catch (error) {
                    console.error('Errore durante il recupero dei posts:', error);
                }
            };

            fetchPosts();
        }
    }, []);

    useEffect(() => {
        setStockPhrase(stock());
    }, []);

    const loadMorePosts = () => {
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 10);
    };


    // refresh "simulato"
    const handleRefresh = async () => {
        setLoadingSpinner(true);
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            // Verifica se la chiave inizia con "topic_"
            if (key.startsWith('topic_')) {
                // Se sì, elimina l'elemento dal session storage
                sessionStorage.removeItem(key);
            }
        }
        try {
            const topicsResponse = await axios.get('/topics');
            dispatch(setTopics(topicsResponse.data));
            sessionStorage.setItem('topics', JSON.stringify(topicsResponse.data));
        } catch (error) {
            console.error('Errore durante il recupero dei topics:', error);
        }
    
        try {
            const postsResponse = await axios.get('/allPosts');
            const sortedPosts = postsResponse.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setPosts(sortedPosts);
            sessionStorage.setItem('allPosts', JSON.stringify(postsResponse.data));
        } catch (error) {
            console.error('Errore durante il recupero dei posts:', error);
        }

        setLoadingSpinner(false);
    }
    

    if (!posts.length && !topics.length) {
        return (
            <Container fluid className='bg-primary-darker p-5'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={caricamento} className='loadingImage loading rounded-circle my-4' alt="caricamento" />
                    <p className='text-light opacity-75'>{stockPhrase}</p>
                </div>
            </Container>
        );
    }

    return (
        <Container fluid className='bg-primary-darker'>
            <div className='py-5 text-light container'>
                <div className='d-flex align-items-center'>
                    <Button className='shadow text-center' variant='light' onClick={handleRefresh}><ArrowClockwise /></Button>
                        {loadingSpinner && (
                            <Spinner className='ms-4' animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        )}
                </div>
                <Row>
                    <Col xs={12} lg={8} className='text-center mx-2 d-flex flex-column justify-content-around'>
                        <h2 className='fw-bold'>Post recenti</h2>
                        {posts.slice(0, visiblePosts).map(post => (
                            <NavLink to={`/forum/topics/${post.topic_id}/${post.id}`} className="text-dark text-decoration-none caricamentoCorpo" key={post.id}>
                                <div className='border border-secondary rounded-3 py-2 px-4 bg-secondary my-2 post'>
                                    <div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='fw-semibold'><Person /> {post.user && post.user.name}</p>
                                            <p>{formatDate(post.created_at)}</p>
                                        </div>
                                        <h4>{post.title}</h4>
                                        <p className='post_replies d-inline py-1 px-2 bg-replies rounded-2'><ChatLeft /> {post.post_replies.length} risposte</p>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                        {visiblePosts < posts.length && (
                            <Button variant="primary" onClick={loadMorePosts}>Visualizza di più</Button>
                        )}
                    </Col>
                    <Col xs={12} lg={3}>
                        <h2 className='fw-bold'>Tutti i topics</h2>
                        <div>
                            {topics.map(topic => (
                                <NavLink key={topic.id} to={`/forum/topics/${topic.id}`} className="nav-link-custom">
                                    <div className='border border-secondary my-2 p-2 shadow forum caricamentoCorpo'>
                                        <div>
                                            <h4 className='fw-semibold'>{topic.title}</h4>
                                            <p>{topic.description}</p>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

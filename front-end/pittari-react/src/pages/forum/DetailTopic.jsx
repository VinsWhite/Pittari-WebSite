import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import { Container } from 'react-bootstrap';
import DividerComp from '../../components/forum/DividerComp';
import { Person, Search, ArrowLeft } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

export default function DetailTopic() {
    const { id } = useParams();
    const [topic, setTopic] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTopic = async () => {
            try {
                const response = await axios.get(`/topics/${id}`);
                setTopic(response.data);
                /* console.log(response.data); */
            } catch (error) {
                console.error('Errore durante il recupero del topic:', error);
            }
        };

        fetchTopic();
    }, [id]);

    if (!topic) {
        return <><div className='bg-primary-darker text-light'>Caricamento...</div> <DividerComp /></>;
    }

    return (
        <>
            <Container fluid className='bg-primary-darker p-5'>
                <Container>
                <NavLink to="/forum" className="text-secondary fs-5 fw-semibold text-decoration-none"><ArrowLeft /> Indietro</NavLink>
                    <h2 className='text-center text-light fw-semibold text-decoration-underline'>Benvenuto in {topic.title}</h2>
                <div className='d-flex align-items-center justify-content-center'>
                    <Search className='me-2 text-light fs-4' />
                    <input 
                    className="form-control w-50 my-4" 
                    type="search" 
                    placeholder="Cerca..." 
                    aria-label="Search"
                    />
                </div>
                    {topic.posts.length > 0 ? (
                        topic.posts.map(post => (
                            <div className='border border-secondary p-2 bg-secondary my-4' key={post.id}>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='fw-semibold'><Person /> {post.user.name}</p>
                                        <p>{post.created_at}</p>
                                    </div>
                                    <h4>{post.title}</h4>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='text-center text-secondary mt-4'>Non ci sono post... sii il primo a pubblicarne uno! 嬉しそう</div>
                    )}
                </Container>
            </Container>
            <DividerComp />
        </>
    );
}

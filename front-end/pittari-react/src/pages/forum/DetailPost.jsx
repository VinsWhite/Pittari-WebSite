import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import DividerComp from '../../components/forum/DividerComp';
import axios from '../../api/axios';
import { ArrowLeft, Person, ChatLeft, Share, PersonBadge } from 'react-bootstrap-icons';

export default function DetailPost() {
    const { topicId, postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`/post/${postId}`);
                setPost(response.data);
            } catch (error) {
                console.error('Errore durante il recupero del post:', error);
            }
        };

        fetchPost();
    }, [postId]);


    // funzione per visualizzare la data in maniera leggibile
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
    
        // Differenza in millisecondi tra la data attuale e la data del post
        const diffInMilliseconds = now - date;
    
        // Calcoliamo il tempo trascorso in ore, minuti e giorni
        const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
        const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    
        // Se la data del post è stata meno di un giorno fa
        if (diffInMinutes < 1440) { // 1440 minuti = 1 giorno
            if (diffInMinutes < 60) {
                // meno di un'ora fa
                return `${diffInMinutes} min fa`;
            } else if (diffInMinutes >= 60 ) {
                // tra 1 ora e meno di 2 ore fa
                return `1 ora fa`;
            } else {
                // oltre 1 ora fa
                return `${diffInHours} ore fa`;
            }
        } else if (diffInDays < 7) {
            // se la data del post è stata meno di una settimana fa
            return `${diffInDays} giorni fa`;
        } else {
            // oltre una settimana fa, visualizziamo la data completa
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return date.toLocaleDateString('it-IT', options);
        }
    };
    

        const copyPostLink = () => {
            const postLink = `${window.location.origin}/forum/topics/${topicId}/${postId}`;
            navigator.clipboard.writeText(postLink)
                .then(() => alert('Link del post copiato con successo!'))
                .catch(error => console.error('Errore durante la copia del link del post:', error));
        };


    return (
        <>
            <Container fluid className='bg-primary-darker p-5'>
                <Container>
                    <NavLink to={`/forum/topics/${topicId}`} className="text-secondary fs-5 fw-semibold text-decoration-none"><ArrowLeft /> Indietro</NavLink>
                    {post && (
                        <div className='border border-secondary rounded-3 py-2 px-4 bg-secondary-emphasis my-4' key={post.id}>
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <p className='fw-semibold'><Person /> {post.user.name} <span className='text-primary ms-3 border border-primary py-1 px-3 rounded-5'>autore</span></p>
                                    <p>{formatDate(post.created_at)}</p>
                                </div>
                                <h4>{post.title}</h4>
                                <p>{post.context}</p>
                                <div className='d-flex align-items-center border-bottom border-1 '>
                                    <p className='post_replies d-inline py-1 px-2 bg-replies rounded-2'><ChatLeft /> {post.post_replies.length} risposte</p>
                                    <p className='ms-3 post_replies d-inline py-1 px-2 bg-replies rounded-2' onClick={copyPostLink}><Share /></p>
                                </div>

                                <div className='d-flex align-items-center mt-2'>
                                    <textarea className='rounded-3' placeholder='Rispondi...' name='context'/>
                                    <Button variant='primary' className='ms-3 rounded-5'> Pubblica </Button>
                                </div>
                                
                                    {post.post_replies && post.post_replies.length === 0 && (
                                        <div className='text-center text-dark mt-4'>Non ci sono risposte al momento.</div>
                                    )}

                                    {post.post_replies && post.user && post.post_replies.map((reply, index) => (
                                        <div key={index} className='ms-5 my-3 py-2 px-4 border border-2 border rounded-5 d-flex flex-column'>
                                            <div className='d-flex justify-content-between'>
                                                <p><PersonBadge /> {reply.user.name}</p>
                                                <p className='text-secondary-gray'>{formatDate(reply.created_at)}</p>
                                            </div>
                                            <p>{reply.context}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </Container>
            </Container>
            <DividerComp />
        </>
    );
}

import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import DividerComp from '../../components/forum/DividerComp';
import axios from '../../api/axios';
import { ArrowLeft, Person, ChatLeft, Share, PersonBadge } from 'react-bootstrap-icons';
import caricamento from '../../assets/img/hashi.jpg'
import formatDate from '../../assets/functions/formatDate';
import stock from '../../assets/functions/stock';

export default function DetailPost() {
    const { topicId, postId } = useParams();
    const [post, setPost] = useState(null);
    const [validated, setValidated] = useState(false);
    const [newReply, setNewReply] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [stockPhrase, setStockPhrase] = useState('');

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'instant' 
        });
      };

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`/post/${postId}`);
                setPost(response.data);
            } catch (error) {
                console.error('Errore durante il recupero del post:', error);
            }
        };

        scrollToTop();
        fetchPost();
    }, [postId]);

    useEffect(() => {
        setStockPhrase(stock());
    }, []);

    if (!post) {
        return <>
            <Container fluid className='bg-primary-darker p-5'>
                <NavLink className="text-secondary fs-5 fw-semibold text-decoration-none"><ArrowLeft /> Indietro</NavLink>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={caricamento} className='loadingImage loading rounded-circle my-4' alt="caricamento" />
                    <p className='text-light opacity-75'>{stockPhrase}</p>
                </div>
            </Container>
            <DividerComp />
        </>;
    }
    
        const copyPostLink = () => {
            const postLink = `${window.location.origin}/forum/topics/${topicId}/${postId}`;
            navigator.clipboard.writeText(postLink)
                .then(() => alert('Link del post copiato con successo!'))
                .catch(error => console.error('Errore durante la copia del link del post:', error));
        };

        const handleReplyChange = (event) => {
            setNewReply(event.target.value);
        };


        const handleSubmit = async (event) => { 
            event.preventDefault();
            const form = event.currentTarget;
        
            if (form.checkValidity() === false) {
              event.stopPropagation();
              return;
            }
        
            try {
              await axios.get("/sanctum/csrf-cookie");
        
              const response = await axios.post('/reply', {
                context: form.context.value,
                post_id: postId,
              }, {
                headers: {
                  'X-XSRF-TOKEN': getCookieValue('XSRF-TOKEN')
                }
              });
              
                window.location.href = `/forum/topics/${topicId}/${postId}`;

                form.reset();
                setLoading(false);

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
            <Container fluid className='bg-primary-darker p-5'>
                <Container>
                    <button onClick={() => navigate(-1)} className="text-secondary fs-5 fw-semibold text-decoration-none bg-transparent border-0"><ArrowLeft /> Indietro</button>
                    {post && (
                        <div className='border border-secondary rounded-3 py-2 px-4 bg-secondary-emphasis my-4 caricamentoCorpo' key={post.id}>
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
                                
                                <Form noValidate validated={validated} onSubmit={(event) => handleSubmit(event)}>
                                    <div className='d-flex align-items-center mt-2'>
                                        <textarea className='rounded-3' placeholder='Rispondi...' name='context' value={newReply} onChange={handleReplyChange}/>
                                        <Button variant='primary' type='submit' className='ms-3 rounded-5'>
                                            {loading ? <Spinner animation="border" variant="light" size="sm" /> : 'Pubblica'}
                                        </Button>
                                    </div>
                                </Form>
                                
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

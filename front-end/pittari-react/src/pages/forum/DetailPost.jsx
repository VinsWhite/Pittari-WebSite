import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import DividerComp from '../../components/forum/DividerComp';
import axios from '../../api/axios';
import { ArrowLeft, Person, ChatLeft, Share, PersonBadge, Trash } from 'react-bootstrap-icons';
import caricamento from '../../assets/img/hashi.jpg'
import formatDate from '../../assets/functions/formatDate';
import stock from '../../assets/functions/stock';
import {Spinner} from 'react-bootstrap';
import scrollToTop from '../../assets/functions/scrollToTop'
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
import { Toast } from 'primereact/toast';

export default function DetailPost() {
    const { topicId, postId } = useParams();
    const [post, setPost] = useState(null);
    const [validated, setValidated] = useState(false);
    const [newReply, setNewReply] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [stockPhrase, setStockPhrase] = useState('');
    const userName = localStorage.getItem('name');
    const role = localStorage.getItem('role');
    const toast = useRef(null);

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
        
            setLoading(true);
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

                setNewReply(''); 
                setLoading(false);

                const fetchPost = async () => {
                    try {
                        const response = await axios.get(`/post/${postId}`);
                        setPost(response.data);
                    } catch (error) {
                        console.error('Errore durante il recupero del post:', error);
                    }
                };

                fetchPost();

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


          const accept = async () => {
            /* console.log('Pulsante premuto') */
            try {
                await axios.delete(`/deletePost/${postId}`);
                sessionStorage.removeItem("topics");
                sessionStorage.removeItem("allPosts");
                sessionStorage.removeItem(`topic_${topicId}`)
                toast.current.show({ severity: 'info', summary: 'Cancellato', detail: 'Hai cancellato il post con successo', life: 3000 });
                navigate(-1);
            } catch (error) {
                /* console.log('Errore durante l\'eliminazione del post:', error); */
                toast.current.show({ severity: 'warn', summary: 'Annullato', detail: 'Operazione rifiutata, riprova più tardi', life: 3000 });
            }
          }

          const reject =  () => {
            toast.current.show({ severity: 'warn', summary: 'Annullato', detail: 'Operazione annullata', life: 3000 });
          }

            const handleDelete = async () => {
                confirmDialog({
                    message: 'Vuoi cancellare questo post?',
                    header: 'Conferma eliminazione',
                    icon: 'pi pi-info-circle',
                    defaultFocus: 'reject',
                    acceptClassName: 'p-button-danger mx-2',
                    acceptLabel: "Elimina",
                    rejectLabel: "Annulla",
                    accept,
                    reject
                });
            };
        

    return (
        <>
            <Container fluid className='bg-primary-darker p-5'>
                <Toast ref={toast} />
                <ConfirmDialog />
                <Container>
                    <button onClick={() => navigate(-1)} className="text-secondary fs-5 fw-semibold text-decoration-none bg-transparent border-0"><ArrowLeft /> Indietro</button>
                    {post && (
                        <div className='border border-secondary rounded-3 py-2 px-4 bg-secondary my-4 caricamentoCorpo position-relative' key={post.id}>
                            <div>
                                {userName === post.user.name && (
                                    <Button variant='danger' onClick={handleDelete} className='ms-2 position-absolute top-0 end-100'><Trash /></Button>
                                )}

                                {role === 'admin' && (
                                    <Button variant='warning' onClick={handleDelete} className='ms-2 position-absolute top-0 end-100'><Trash /></Button>

                                )}

                                <div className='d-flex justify-content-between'>
                                    <p className='fw-semibold'><Person /> {post.user.name} 
                                        <span className='text-primary ms-3 border border-primary py-1 px-3 rounded-5'>autore</span>
                                    </p>
                                    <p>{formatDate(post.created_at)}</p>
                                </div>
                                <h4>{post.title}</h4>
                                <p>{post.context}</p>
                                <div className='d-flex align-items-center border-bottom border-dark border-1 '>
                                    <p className='post_replies d-inline py-1 px-2 bg-replies rounded-2'><ChatLeft /> {post.post_replies.length} risposte</p>
                                    <p className='ms-3 post_replies d-inline py-1 px-2 bg-replies rounded-2' onClick={copyPostLink}><Share /></p>
                                </div>
                                
                                <Form noValidate validated={validated} onSubmit={(event) => handleSubmit(event)}>
                                    <div className='d-sm-flex d-block align-items-center mt-2'>
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

import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importa useSelector
import axios from '../../api/axios';
import { Container } from 'react-bootstrap';
import DividerComp from '../../components/forum/DividerComp';
import { Person, Search, ArrowLeft, ChatLeft, Plus } from 'react-bootstrap-icons';
import caricamento from '../../assets/img/fuji.jpg'
import formatDate from '../../assets/functions/formatDate';
import stock from '../../assets/functions/stock';

export default function DetailTopic() {
    const { id } = useParams();
    const [topic, setTopic] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5; // Numero di post per pagina
    const isAuthenticated = useSelector(state => state.users.token !== null); // Leggi lo stato dell'autenticazione da Redux
    const navigate = useNavigate();
    const [stockPhrase, setStockPhrase] = useState('');

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'instant' 
        });
      };

    useEffect(() => {
        const fetchTopic = async () => {
            try {
                const response = await axios.get(`/topics/${id}`);
                const sortedPosts = response.data.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setTopic({ ...response.data, posts: sortedPosts });
            } catch (error) {
                console.error('Errore durante il recupero del topic:', error);
            }
        };

        scrollToTop();
        fetchTopic();
    }, [id]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchInput(searchTerm); 
    };

    useEffect(() => {
        setStockPhrase(stock());
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = topic ? topic.posts.slice(indexOfFirstPost, indexOfLastPost) : [];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (!topic) {
        return <>
            <Container fluid className='bg-primary-darker p-5'>
            <button onClick={() => navigate(-1)} className="text-secondary fs-5 fw-semibold text-decoration-none bg-transparent border-0"><ArrowLeft /> Indietro</button>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={caricamento} className='loadingImage loading rounded-circle my-4' alt="caricamento" />
                    <p className='text-light opacity-75'>{stockPhrase}</p>
                </div>
            </Container>
            <DividerComp />
        </>;
    }

    return (
        <>
            <Container fluid className='bg-primary-darker p-5'>
                <Container>
                <button onClick={() => navigate(-1)} className="text-secondary fs-5 fw-semibold text-decoration-none bg-transparent border-0"><ArrowLeft /> Indietro</button>
                    {isAuthenticated && (
                        <NavLink to={`/forum/topics/${topic.id}/create`} className="create_posts text-dark bg-secondary border-2 border border-primary fs-5 fw-semibold text-decoration-none position-fixed bottom-0 end-0 m-3 fs-3 p-2 d-flex align-items-center rounded-circle "><Plus /> </NavLink>
                    )}
                    <h2 className='text-center text-light fw-semibold text-decoration-underline'>Benvenuto in {topic.title}</h2>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Search className='me-2 text-light fs-4' />
                        <input 
                            className="form-control w-50 my-4" 
                            type="search" 
                            placeholder="Cerca..." 
                            aria-label="Search"
                            value={searchInput}
                            onChange={handleSearch}
                        />
                    </div>
                    <div>
                        {currentPosts.length > 0 ? (
                            currentPosts.map(post => (
                                <NavLink to={`/forum/topics/${topic.id}/${post.id}`} className="text-dark text-decoration-none caricamentoCorpo" key={post.id}>
                                    <div className='border border-secondary rounded-3 py-2 px-4 bg-secondary-emphasis my-2 post'>
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <p className='fw-semibold'><Person /> {post.user.name}</p>
                                                <p>{formatDate(post.created_at)}</p>
                                            </div>
                                            <h4>{post.title}</h4>
                                            <p className='post_replies d-inline py-1 px-2 bg-replies rounded-2'><ChatLeft /> {post.post_replies.length} risposte</p>
                                        </div>
                                    </div>
                                </NavLink>
                            ))
                        ) : (
                            <div className='text-center text-secondary mt-4'>Non ci sono post... sii il primo a pubblicarne uno! 嬉しそう</div>
                        )}
                    </div>
                    {/* Implementazione dei pulsanti di paginazione */}
                    <div className="pagination">
                        {Array.from({ length: Math.ceil(topic.posts.length / postsPerPage) }).map((_, index) => (
                            <button key={index} onClick={() => paginate(index + 1)} className="btn btn-light ms-2">{index + 1}</button>
                        ))}
                    </div>
                </Container>
            </Container>
            <DividerComp />
        </>
    );
}

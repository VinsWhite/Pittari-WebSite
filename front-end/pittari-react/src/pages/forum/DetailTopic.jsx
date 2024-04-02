import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import { Container } from 'react-bootstrap';
import DividerComp from '../../components/forum/DividerComp';
import { Person, Search, ArrowLeft, ChatLeft, Plus } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function DetailTopic() {
    const { id } = useParams();
    const [topic, setTopic] = useState(null);
    const [searchInput, setSearchInput] = useState(''); // stato locale per la ricerca
    const [filteredPosts, setFilteredPosts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.users.token !== null); 

    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);
    
      if (!isLoggedIn) {
        return null; 
    }

    useEffect(() => {
        const fetchTopic = async () => {
            try {
                const response = await axios.get(`/topics/${id}`);
                setTopic(response.data);
                setFilteredPosts(response.data.posts);
                /* console.log(response.data); */
            } catch (error) {
                console.error('Errore durante il recupero del topic:', error);
            }
        };

        fetchTopic();
    }, [id, dispatch]);

    // ricerca dei post
    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchInput(searchTerm); 
    
        if (topic && topic.posts) {
            const filtered = topic.posts.filter(post =>
                post.title.toLowerCase().includes(searchTerm) ||
                post.user.name.toLowerCase().includes(searchTerm)
            );
        
            setFilteredPosts(filtered);
        }
    };
    

    if (!topic) {
        return <><div className='bg-primary-darker text-light'>Caricamento...</div> <DividerComp /></>;
    }

    return (
        <>
            <Container fluid className='bg-primary-darker p-5'>
                <Container>
                <NavLink to="/forum" className="text-secondary fs-5 fw-semibold text-decoration-none"><ArrowLeft /> Indietro</NavLink>
                <NavLink to={`/forum/topics/${topic.id}/create`} className="create_posts text-dark bg-secondary border-2 border border-primary fs-5 fw-semibold text-decoration-none position-fixed bottom-0 end-0 m-3 fs-3 p-2 d-flex align-items-center rounded-circle "><Plus /> </NavLink>
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
                    {topic.posts.length > 0 ? (
                        filteredPosts.map(post => (
                            <div className='border border-secondary rounded-3 py-2 px-4 bg-secondary-emphasis my-4 post' key={post.id}>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='fw-semibold'><Person /> {post.user.name}</p>
                                        <p>{post.created_at}</p>
                                    </div>
                                    <h4>{post.title}</h4>
                                    <p className='post_replies d-inline py-1 px-2 bg-replies rounded-2'><ChatLeft /> {post.post_replies.length} risposte</p>
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

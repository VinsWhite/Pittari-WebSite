import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import axios from '../../../api/axios';
import Lottie from 'lottie-react'
import stock from '../../../assets/functions/stock';
import loadingBallAnimation from '../../../assets/animations/loadingBallAnimation.json'
import scrollToTop from '../../../assets/functions/scrollToTop'

export default function BunKaado() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [cards, setCards] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const maxCards = 8;
    const [loading, setLoading] = useState(true);
    const [backClicked, setBackClicked] = useState(false); // quelle che sono già state girate, rimangono girate
    const [audioKey, setAudioKey] = useState(0);
    const [knowns, setKnowns] = useState(0);
    const [unknowns, setUnknowns] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [scores, setScores] = useState(0);
    const location = useLocation();
    const gameName = decodeURIComponent(location.pathname.split('/').pop());


    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNextCard = () => {
            if (currentCardIndex + 1 < maxCards) {
            setIsFlipped(true); 
            setTimeout(() => {
                setCurrentCardIndex((prevIndex) => prevIndex + 1);
                setIsFlipped(false);
                setAudioKey((prevKey) => prevKey + 1);
            }, 150);
        } else {
            setShowResults(true);
        }
    };

    /* const handlePrevCard = () => {
        setIsFlipped(true);
        setBackClicked(true);
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    }; */

    useEffect(() => {
      scrollToTop();
    }, [])
    

    useEffect(() => {;
        const fetchCards = async () => {
            try {
                const response = await axios.get('/examples');
                const shuffledCards = response.data.sort(() => Math.random() - 0.5); // mescola l'array delle carte
                const selectedCards = shuffledCards.slice(0, maxCards); // preleva i primi 8 elementi
                setCards(selectedCards);
            } catch (error) {
                /* console.error('Errore durante il recupero delle carte:', error); */
            }
            setLoading(false); 
            
        };
    
        fetchCards();
    }, []);
    

    useEffect(() => {
        // visualizza la risposta precedente già invertita
        if (backClicked) {
            setIsFlipped(true);
            setBackClicked(false); 
        }
    }, [backClicked]);

    const iknow = () => {
        setKnowns(knowns + 1);
        if (knowns + 1 > 5) {
            setScores(scores + 1);
        }
        handleNextCard();
        /* console.log('ne sai: ' + knowns) */
    }
    
    const idontknow = () => {
        setUnknowns(unknowns + 1);
        handleNextCard();
        /* console.log('non ne sai: ' + unknowns) */
    }

    const handleRestart = () => {
        setKnowns(0);
        setUnknowns(0);
        setCurrentCardIndex(0);
        setShowResults(false);
    }

    return (
        <>
            <Container fluid className='bg-primary-darker p-5 d-flex justify-content-center'>
                {loading && (
                    <div className='text-center d-flex flex-column bg-secondary p-5 rounded-4'>
                        <Lottie className='imageLoadingBall' animationData={loadingBallAnimation} />
                        <p>Caricamento...</p>
                        <p className='opacity-75'>{stock()}</p>
                    </div>
                )}

            {!showResults && cards.length > 0 && (
                <div className={`flashcard-container text-center ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                    <div className='flashcard'>
                            <>
                                <div className='bg-secondary p-5 m-5 shadow rounded-4 sentence'>
                                    <div className='content'>
                                        <p className='text-end'>{currentCardIndex + 1} / {maxCards}</p>
                                        <p className='opacity-75'>{cards[currentCardIndex].furigana}</p>
                                        <h2 className='border-bottom pb-3'>{cards[currentCardIndex].japanese_name}</h2>
                                        <audio controls key={audioKey} className='mt-3 '>
                                            <source src={`http://localhost:8000${cards[currentCardIndex].audio}`} type="audio/mp3" />
                                            Il tuo browser non supporta la funzione audio
                                        </audio>
                                    </div>
                                </div>
    
                                <div className='bg-secondary p-5 m-5 shadow rounded-4 answer'>
                                    <div className='content'>
                                        <p className='text-end'>{currentCardIndex + 1} / {maxCards}</p>
                                        <h2>{cards[currentCardIndex].italian_translation}</h2>
                                        <div className="d-flex justify-content-between mt-5">
                                            <p onClick={iknow} className='bg-primary-darker text-light p-2 rounded-4 btnLoSo'>La so</p>
                                            <p onClick={idontknow} className='bg-danger text-light p-2 rounded-4 btnNonLoSo'>Non la so</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        
                    </div>
                </div>
                )}

                {showResults && !loading && ( 
                    <div className='bg-secondary p-5 rounded-4 shadow'>
                        <h3 className='mb-4'>RISULTATI</h3>
                        <p className='fw-semibold'>Ne sapevo: {knowns} </p>
                        <p className='text-danger fw-semibold'>Non ne sapevo: {unknowns} </p>
                        <div className='d-flex justify-content-between mt-3 border-top p-2'>
                            {unknowns >= 5 && (
                                <Button onClick={handleRestart} variant='danger'>Ricomincia</Button>
                            )}
                            <NavLink to='/learn' className='btn btn-primary text-light ms-3'>Esci</NavLink>
                        </div>
                    </div>
                )}
    
            </Container>
        </>
    );
    
}

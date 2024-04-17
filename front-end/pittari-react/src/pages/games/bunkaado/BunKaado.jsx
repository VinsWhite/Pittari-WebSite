import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from '../../../api/axios';
import Lottie from 'lottie-react'
import stock from '../../../assets/functions/stock';
import loadingBallAnimation from '../../../assets/animations/loadingBallAnimation.json'

export default function BunKaado() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [cards, setCards] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNextCard = () => {
        setIsFlipped(true); 
        setTimeout(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1 + cards.length) % cards.length);
            setIsFlipped(false);
        }, 200);
    };

    const handlePrevCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    useEffect(() => {
        setLoading(true)
        const fetchCards = async () => {
            try {
                const response = await axios.get('/examples');
                setCards(response.data);
            } catch (error) {
                console.error('Errore durante il recupero delle carte:', error);
            }
            setLoading(false)
        };

        fetchCards();
    }, []);

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
                <div className={`flashcard-container text-center ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                    <div className='flashcard'>
                        {cards.length > 0 && (
                            <>
                                <div className='bg-secondary p-5 m-5 shadow rounded-4 sentence'>
                                    <div className='content'>
                                        <p className='opacity-75'>{cards[currentCardIndex].furigana}</p>
                                        <h2>{cards[currentCardIndex].japanese_name}</h2>
                                    </div>
                                </div>

                                <div className='bg-secondary p-5 m-5 shadow rounded-4 answer'>
                                    <div className='content'>
                                        <h2>{cards[currentCardIndex].italian_translation}</h2>
                                        <div className="d-flex justify-content-between mt-3">
                                            <Button onClick={handlePrevCard} variant="light" disabled={currentCardIndex === 0}>Indietro</Button>
                                            <Button onClick={handleNextCard} variant="light" disabled={currentCardIndex === cards.length - 1}>Avanti</Button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
}

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
    const [loading, setLoading] = useState(true);
    const [backClicked, setBackClicked] = useState(false); // quelle che sono già state girate, rimangono girate
    const [audioKey, setAudioKey] = useState(0);
    const [knowns, setKnowns] = useState(1);
    const [unknowns, setUnknowns] = useState(1);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNextCard = () => {
        setIsFlipped(true); 
        setTimeout(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1 + cards.length) % cards.length);
            setIsFlipped(false);
            setAudioKey((prevKey) => prevKey + 1);
            /* console.log("Next card index:", currentCardIndex); */
        }, 180);
    };

    /* const handlePrevCard = () => {
        setIsFlipped(true);
        setBackClicked(true);
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    }; */

    useEffect(() => {;
        const fetchCards = async () => {
            try {
                const response = await axios.get('/examples');
                const shuffledCards = response.data.sort(() => Math.random() - 0.5); // mescola l'array delle carte
                const selectedCards = shuffledCards.slice(0, 8); // preleva i primi 8 elementi
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
        handleNextCard();
        console.log('ne sai: ' + knowns)
    }
    
    const idontknow = () => {
        setUnknowns(unknowns + 1);
        handleNextCard();
        console.log('non ne sai: ' + unknowns)
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

            {(cards.length > 0 && currentCardIndex <= 8 ) && (
                <div className={`flashcard-container text-center ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                    <div className='flashcard'>
                            <>
                                <div className='bg-secondary p-5 m-5 shadow rounded-4 sentence'>
                                    <div className='content'>
                                        <p className='text-end'>{currentCardIndex + 1}</p>
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
                                        <p className='text-end'>{currentCardIndex + 1}</p>
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

                {(!loading && currentCardIndex == 8) && ( 
                    <div>
                        <p>Ne sapevo {knowns} </p>
                        <p>Non ne sapevo {unknowns} </p>
                    </div>
                )}
    
            </Container>
        </>
    );
    
}

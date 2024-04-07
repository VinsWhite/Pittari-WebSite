import React, { useEffect, useState } from 'react';
import axios from '../../api/axios'; 
import { Button } from 'react-bootstrap';

export default function TangoKaado() {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [audioKey, setAudioKey] = useState(0); 
  const [flip, setFlip] = useState(false); //stato per capovolgere la card

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await axios.get('/fruits');
        setFruits(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Errore durante il recupero delle frutta:', error);
        setLoading(false);
      }
    };

    fetchFruits();
  }, []);

  useEffect(() => {
    const audioElement = document.getElementById('audio');
    if (audioElement) {
      audioElement.play();
    }
  }, [fruits, currentCardIndex]); 

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === fruits.length - 1 ? 0 : prevIndex + 1));
    setAudioKey(prevKey => prevKey + 1); 
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? fruits.length - 1 : prevIndex - 1));
    setAudioKey(prevKey => prevKey + 1); 
  };

  return (
    <div className="container-fluid py-5 bg-primary-emphasis">
      <h1 className='text-light'>{loading ? 'Caricamento...' : 'Argomento: frutta'}</h1>
      <div className="card mb-3">
        <div className="card-body bg-primary-emphasis flashcard d-flex flex-column align-items-center text-light">
          {!loading && (
            <>
                <div className='bg-primary-darker rounded-3 p-4 flipCard' onClick={() => setFlip(!flip)}>
                {!flip ? (
                        <>
                            <img className='rounded-4' src={`http://localhost:8000${fruits[currentCardIndex].image}`} alt={fruits[currentCardIndex].japanese_name} />
                            <audio id="audio" key={audioKey} autoPlay>
                                <source src={`http://localhost:8000${fruits[currentCardIndex].audio}`} type="audio/mpeg" />
                                Il tuo browser non supporta l'elemento audio.
                            </audio>
                        </>
                    ) : (
                        <>
                            <h5 className="card-title mt-3">{fruits[currentCardIndex].japanese_name}</h5>
                            <p className="card-text">{fruits[currentCardIndex].furigana}</p>
                            <p className="card-text mt-3">{fruits[currentCardIndex].italian_translation}</p>
                            <Button className='text-dark' variant='secondary' onClick={goToNextCard}>Next</Button>
                            <Button className='text-dark' variant='secondary' onClick={goToPreviousCard}>Previous</Button>
                            <audio id="audio" key={audioKey} autoPlay>
                                <source src={`http://localhost:8000${fruits[currentCardIndex].audio}`} type="audio/mpeg" />
                                Il tuo browser non supporta l'elemento audio.
                            </audio>
                        </>
                    )}
                
                        </div>
                    </>
                )}
        </div>
      </div>
    </div>
  );
}

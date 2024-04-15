import React, { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import stock from '../../../assets/functions/stock';
import scrollToTop from '../../../assets/functions/scrollToTop';
import { Button } from 'react-bootstrap';

export default function WGame() {
  const [japaneseWord, setJapaneseWord] = useState('');
  const [options, setOptions] = useState([]);
  const [correctTranslation, setCorrectTranslation] = useState('');
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [maxAttempts, setMaxAttempts] = useState(10);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showResultsPopup, setShowResultsPopup] = useState(false);

  useEffect(() => {
    scrollToTop();
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/allArguments');
      const data = response.data;

      const randomFruitIndex = Math.floor(Math.random() * data.fruits.length);
      const randomJapaneseWord = data.fruits[randomFruitIndex].japanese_name;
      setJapaneseWord(randomJapaneseWord);

      const correctWord = data.fruits[randomFruitIndex];
      const correctTranslation = correctWord.italian_translation;

      let incorrectTranslation = '';
      do {
        const randomIncorrectIndex = Math.floor(Math.random() * data.pronouns.length);
        incorrectTranslation = data.pronouns[randomIncorrectIndex].italian_translation;
      } while (incorrectTranslation === correctTranslation);

      setOptions([
        { text: correctTranslation, isCorrect: true },
        { text: incorrectTranslation, isCorrect: false }
      ]);
      setCorrectTranslation(correctTranslation);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleDrop = (item) => {
    if (item.isCorrect) {
      console.log('Correct!');
      setCorrectAnswersCount(correctAnswersCount + 1);
    } else {
      console.log('Wrong!');
    }
  
    setAttemptsCount(attemptsCount + 1);
  
    if (attemptsCount < maxAttempts) {
      fetchData();
    } else {
      console.log('Max attempts reached');
      const message = `Risposte corrette: ${correctAnswersCount}`;
      alert(message);
    }
  };
  

  const handleClosePopup = () => {
    setShowResultsPopup(false);
    navigate('/learn');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='bg-primary-darker p-5'>
        <div className='bg-secondary p-5 m-5 rounded-4 shadow'>
          {loading ? (
            <>
              <div className='text-center'>
                <p>Caricamento...</p>
                <p className='opacity-75'>{stock()}</p>
              </div>
            </>
          ) : (
            <>
              <h5 className='fw-semibold text-primary'>{japaneseWord}</h5>
              <div>
                {options.map((option, index) => (
                  <Option key={index} text={option.text} isCorrect={option.isCorrect} />
                ))}
              </div>
              <h5 className='mt-4'>Trascina qui sotto:</h5>
              <DropArea correctTranslation={correctTranslation} onDrop={handleDrop} />

              {attemptsCount >= 11 &&
                <Button className='mt-3'>Fine</Button>
              }
            </>
          )}
        </div>
      </div>
      {showResultsPopup && (
        <ResultsPopup correctAnswersCount={correctAnswersCount} onClose={handleClosePopup} />
      )}
    </DndProvider>
  );
}

function Option({ text, isCorrect }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'OPTION',
    item: { text, isCorrect },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drag} style={{ opacity }} className='dragReply'>
      {text}
    </div>
  );
}

function DropArea({ correctTranslation, onDrop }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'OPTION',
    drop: (item) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const backgroundColor = isOver ? 'lightgreen' : 'white';
  const border = '1px dashed black';
  const style = {
    backgroundColor,
    border,
    height: '100px',
    width: '200px',
    textAlign: 'center',
    lineHeight: '100px',
  };

  return (
    <div ref={drop} style={style}>
      {canDrop ? 'Rilascia qui!' : ``}
    </div>
  );
}

function ResultsPopup({ correctAnswersCount, onClose }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Risultati</h2>
        <p>Risposte corrette: {correctAnswersCount}</p>
        <button onClick={onClose}>Chiudi</button>
      </div>
    </div>
  );
}

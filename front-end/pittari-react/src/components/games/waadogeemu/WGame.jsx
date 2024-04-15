import React, { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function WGame() {
  const [japaneseWord, setJapaneseWord] = useState('');
  const [options, setOptions] = useState([]);
  const [correctTranslation, setCorrectTranslation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  
  

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h2>Translate the word:</h2>
        <div>{japaneseWord}</div>
        <div>
          {options.map((option, index) => (
            <Option key={index} text={option.text} isCorrect={option.isCorrect} />
          ))}
        </div>
        <h3>Drag the correct translation below:</h3>
        <DropArea correctTranslation={correctTranslation} />
      </div>
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
    <div ref={drag} style={{ opacity }}>
      {text}
    </div>
  );
}

function DropArea({ correctTranslation }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'OPTION',
    drop: (item) => {
      if (item.isCorrect) {
        console.log('Correct!');
      } else {
        console.log('Wrong!');
      }
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
      {canDrop ? 'Drop here!' : `Correct translation: ${correctTranslation}`}
    </div>
  );
}

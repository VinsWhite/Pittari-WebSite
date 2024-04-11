import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { kanjiApi } from '../api/kanji';
import VisibilitySensor from 'react-visibility-sensor';

export default function GeneralDividerComp() {
  const [randomKanji, setRandomKanji] = useState([]);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: kanjiApi.url,
        headers: kanjiApi.headers,
      };

      try {
        const response = await axios.request(options);
        const kanjiData = response.data;
        const shuffledKanjiData = shuffleArray(kanjiData);
        const randomKanjiData = shuffledKanjiData.slice(0, 12);
        setRandomKanji(randomKanjiData);
        setError(null); 
        /* console.log(response.data) */
      } catch (error) {
        /* console.error(error); */
        setError(error); 
      }
    };

    // chiamiamo fetchData all'avvio e poi ogni minuto
    fetchData();
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // funzione per mescolare l'array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (error) {
    return (
      <div className='bg-primary-emphasis p-5 text-light fs-3 text-center'>
        <p>漢字が大好きです！</p>
      </div>
    );
  }

  const handleVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  return (
    <div className='bg-primary-emphasis p-5 text-light fs-3'>
      <div className='kanji-container'>
        {randomKanji.map((kanji, index) => (
          <VisibilitySensor key={index} onChange={handleVisibilityChange}>
            <div className={`${isVisible ? 'kanji-item' : ''}`}>
              <p>{kanji.kanji.character}</p>
            </div>
          </VisibilitySensor>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { kanjiApi } from '../../api/kanji';
import { ArrowClockwise } from 'react-bootstrap-icons';

const commonKanji = ['話', '人', '日', '月', '山', '川', '田', '花', '木', '林', '森', '火', '水', '土', '金', '空', '天', '生', '白', '青', '赤', '黒', '左', '右', '北', '南', '東', '西', '大', '小', '上', '下', '中', '目', '耳', '口', '手', '足'];

export default function LastSectionHomeComp() {
  const [kanjiData, setKanjiData] = useState(null);
  const [randomKanji, setRandomKanji] = useState('');

  useEffect(() => {
    loadRandomKanji();
  }, []);

  const loadRandomKanji = async () => {
    const randomKanjiChar = getRandomKanji();
    try {
      const response = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${randomKanjiChar}`, {
        headers: kanjiApi.headers,
      });
      setKanjiData(response.data);
      const randomIndex = Math.floor(Math.random() * response.data.examples.length);
      const randomExample = response.data.examples[randomIndex];
      setRandomKanji(randomExample.japanese);
      console.log(response.data);
    } catch (error) {
      console.error('Errore durante il recupero delle informazioni del kanji:', error);
    }
  };

  const getRandomKanji = () => {
    const randomIndex = Math.floor(Math.random() * commonKanji.length);
    return commonKanji[randomIndex];
  };

  const handleLoadingKanji = () => {
    loadRandomKanji();
  };

  if (!kanjiData) {
    return (
      <div className='bg-primary p-5'>
        <h2 className='text-secondary fw-semibold text-center text-uppercase'>Conosci questo kanji?</h2>
        <Row className='mt-3 text-light'>
          <Col className='d-flex justify-content-center align-items-center flex-column'>
          </Col>
          <Col className='d-flex flex-column justify-content-center'>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div className='bg-primary p-5'>
      <h2 className='text-secondary fw-semibold text-center text-uppercase'>Conosci questo kanji?</h2>
      <Row className='mt-3 text-light'>
        <Col className='d-flex justify-content-center align-items-center flex-column'>
          <p
            onClick={handleLoadingKanji}
            className='bg-secondary text-dark p-1 rounded-3 d-flex align-items-center shadow caricaKanji'
          >
            CARICANE UN ALTRO <ArrowClockwise className='ms-2' />
          </p>
          <p>Carattere: {kanjiData.kanji.character}</p>
          <p>Significato: {kanjiData.kanji.meaning.english}</p>
          <p>Onyomi: {kanjiData.kanji.onyomi.romaji}</p>
          <p>Kunyomi: {kanjiData.kanji.kunyomi.romaji}</p>
          <p>Esempio: {randomKanji}</p>
        </Col>
        <Col className='d-flex flex-column justify-content-center'>
          <video autoPlay loop>
            <source src={kanjiData.kanji.video.webm} type="video/webm" />
            Il tuo browser non supporta questa funzione
          </video>
        </Col>
      </Row>
    </div>
  );
}

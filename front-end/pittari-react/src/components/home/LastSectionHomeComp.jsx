import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { kanjiApi } from '../../api/kanji';

export default function LastSectionHomeComp() {
  const [kanjiData, setKanjiData] = useState(null);

  useEffect(() => {
    const fetchKanjiData = async () => {
      try {
        const response = await axios.get('https://kanjialive-api.p.rapidapi.com/api/public/kanji/話', {
          headers: kanjiApi.headers,
        });
        console.log(response.data)
        setKanjiData(response.data);
      } catch (error) {
        console.error('Errore durante il recupero delle informazioni del kanji:', error);
      }
    };

    fetchKanjiData();
  }, []);

  if (!kanjiData) {
    return (
    <>
      <div className='bg-primary p-5'>
        <h2 className='text-secondary fw-semibold text-center text-uppercase'>Conosci questo kanji?</h2>
        <Row className='mt-3 text-light'>
          <Col className='d-flex justify-content-center align-items-center flex-column'>
          </Col>
          <Col className='d-flex flex-column justify-content-center'>
          </Col>
        </Row>
      </div>
    </>);
  }

  const randomIndex = Math.floor(Math.random() * kanjiData.examples.length);
  const randomExample = kanjiData.examples[randomIndex];
  const randomExampleAudio = kanjiData.examples[randomIndex].audio.mp3;

  return (
    <>
      <div className='bg-primary p-5'>
        <h2 className='text-secondary fw-semibold text-center text-uppercase'>Conosci questo kanji?</h2>
        <Row className='mt-3 text-light'>
          <Col className='d-flex justify-content-center align-items-center flex-column'>
            <p>Carattere: {kanjiData.kanji.character}</p>
            <p>Significato: {kanjiData.kanji.meaning.english}</p>
            <p>Onyomi: {kanjiData.kanji.onyomi.romaji}</p>
            <p>Kunyomi: {kanjiData.kanji.kunyomi.romaji}</p>
            <p>Esempio: {randomExample.japanese}</p>
          </Col>
          <Col className='d-flex flex-column justify-content-center'>
            <video autoPlay loop>
              <source src={kanjiData.kanji.video.webm} type="video/webm"  />
              Il tuo browser non supporta questa funzione
            </video>
          </Col>
        </Row>
      </div>
    </>
  );
}

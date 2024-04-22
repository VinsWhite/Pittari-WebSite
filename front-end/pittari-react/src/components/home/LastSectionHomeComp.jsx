import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { kanjiApi } from '../../api/kanji';

const commonKanji = [
  '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
  '百', '千', '万', '円', '時', '日', '月', '年', '火', '水',
  '木', '金', '土', '空', '山', '川', '田', '口', '目', '耳',
  '手', '足', '口', '男', '女', '子', '人', '学', '校', '先',
  '生', '店', '家', '会', '社', '村', '町', '市', '国', '外',
  '文', '書', '読', '話', '聞', '言', '日', '本', '語', '英',
  '会', '話', '手', '紙', '車', '自', '動', '車', '鉄', '道',
  '飛', '行', '機', '船', '写', '真', '病', '気', '病', '院',
  '歯', '医', '者', '薬', '食', '品', '飲', '物', '運', '動'
];


export default function LastSectionHomeComp() {
  const [kanjiData, setKanjiData] = useState(null);

  useEffect(() => {
    const fetchKanjiData = async () => {
      try {
        const randomKanji = commonKanji[Math.floor(Math.random() * commonKanji.length)];
        const response = await axios.get(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${randomKanji}`, {
          headers: kanjiApi.headers,
        });
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
            <video autoPlay loop key={kanjiData.kanji.character}>
              <source src={kanjiData.kanji.video.mp4} type="video/mp4"  />
              Il tuo browser non supporta questa funzione
            </video>
          </Col>
        </Row>
      </div>
    </>
  );
}

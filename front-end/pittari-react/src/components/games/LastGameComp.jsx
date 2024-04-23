import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import placeholder from '../../assets/img/hashi.jpg';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from '../../api/axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ArrowRight } from 'react-bootstrap-icons';

export default function LastGameComp() {
  const lastGame = useSelector((state) => state.lastGame);
  const [scores, setScores] = useState([]);
  const [allScores, setAllScores] = useState([]);
  const role = localStorage.getItem('role');
  const [loading, setLoading] = useState(true);

  if (!lastGame || typeof lastGame !== 'object' || !lastGame.name || !lastGame.image) {
    return null;
  }

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get('/gameScores');
        setScores(response.data);
        /* console.log(response.data); */
      } catch (error) {
        /* console.error('Errore' , error); */
      }
    };

    const fetchAllScores = async () => {
      try {
        const response = await axios.get('/allScores');
        setAllScores(response.data);
        /* console.log(response.data); */
      } catch (error) {
        /* console.error('Errore' , error); */
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await fetchScores();
      if (role === 'admin') {
        await fetchAllScores();
      }
      setLoading(false);
    };

    fetchData();
  }, [role]);

  return (
    <div className='bg-primary-darker p-5'>
        <Row>
          <Col sm={12} md={9}>
            <NavLink to={lastGame && lastGame.name ? `/learn/${lastGame.name}` : '/learn'} className='text-decoration-none text-light'>
              <Container>
                <div className='lastGame bg-primary p-4 rounded-4 shadow'>
                  <h5 className='opacity-75'>Cosa stai studiando</h5>
                  <Row>
                    <Col sm={12} md={6} className='d-flex align-items-center justify-content-center d-md-block'>
                      <img src={lastGame ? `http://localhost:8000${lastGame.image}` : placeholder} alt="Ultimo gioco" />
                    </Col>
                    <Col sm={12} md={6} className='d-flex flex-column justify-content-center align-items-center pt-4 pt-md-0'>
                      <h2>{lastGame ? lastGame.name : 'Non hai ancora avviato nessun gioco'}</h2>
                      <p>{lastGame ? lastGame.typology : ''}</p>
                      <p className='opacity-75'>{lastGame ? `(${lastGame.language} version)` : ''}</p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </NavLink>
          </Col>

          {/* contenitore punteggi */}
          <Col sm={12} md={3}>
            <Container className='bg-secondary px-4 py-3 text-dark rounded-4 shadow mt-3 mt-md-0 divPunteggi'>
              <h3>Punteggi</h3>
              {loading ? (
                <SkeletonTheme baseColor='#c7e2fc' hightlightColor='#dee1e3'>
                  <Skeleton height={60} />
                  <Skeleton height={60} />
                </SkeletonTheme>
              ) : (
                <>
                  {scores.length > 0 ? (
                    scores.map((score, index) => (
                      <div key={index}>
                        <p>{score.game.name} <span className='bg-primary text-light py-1 px-2 ms-3 rounded-4'>{score.scores}</span></p>
                      </div>
                    ))
                  ) : (
                    <div className='text-center py-5'>
                      <p className='fw-semibold text-decoration-underline'>Nessun punteggio registrato</p>
                    </div>
                  )}

                  {role === 'admin' && (
                    <>
                      <p className='text-warning fw-semibold mt-3 pt-2 border-top'>TUTTI</p>
                      {allScores.length > 0 && allScores.map((score, index) => (
                        <div key={index}>
                          <p><span className='text-decoration-underline'>{score.user.name}</span> <ArrowRight /> {score.game.name} <span className='bg-primary text-light py-1 px-2 ms-3 rounded-4'>{score.scores}</span></p>
                        </div>
                      ))}
                    </>
                  )}
                  
                </>
              )}
            </Container>
          </Col>
        </Row>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export default function AllGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/allGames');
        setGames(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Errore durante il recupero dei giochi:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      <div className='bg-primary-darker p-4'>
        <Container>
          <div className='allGames'>
            <h1 className='pb-3'>{loading ? 'Caricamento...' : 'Tutti i giochi'}</h1>
            <ul>
              <Row>
                {games && games.length > 0 ? (
                  games.map((game) => (
                        <Col key={game.id} xs={12} lg={6}>
                            <NavLink to={`/learn/${game.name}`} key={game.id} className="nav-link-custom">
                                <div className='oneGame bg-primary d-flex p-3 align-items-center justify-content-between shadow mt-2 mt-lg-0'>
                                    <img className='rounded-2' src={`http://localhost:8000${game.image}`} alt={game.name} />
                                    <h3>{game.name}</h3>
                                    <div className='text-center bg-primary-darker p-2 rounded-4'>
                                    <p className='fw-semibold'>Tipologia</p>
                                    <p>{game.typology}</p>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                  ))
                ) : (
                  <p>Nessun gioco disponibile al momento.</p>
                )}
              </Row>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}

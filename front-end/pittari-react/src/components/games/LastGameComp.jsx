import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import placeholder from '../../assets/img/hashi.jpg';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function LastGameComp() {
  const lastGame = useSelector((state) => state.lastGame);

  if (!lastGame || typeof lastGame !== 'object' || !lastGame.name || !lastGame.image) {
    return null;
  }

  return (
    <div className='bg-primary-darker p-5'>
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
              </Col>
            </Row>

          </div>
        </Container>
      </NavLink>
    </div>
  );
}

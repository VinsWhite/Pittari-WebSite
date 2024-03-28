import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import speak from '../../assets/img/speak.png';

export default function Section1Comp() {
  return (
    <>
        <div className='bg-primary p-5'>
            <h2 className='text-secondary fw-semibold text-center text-uppercase'>Totalmente gratuito!</h2>
            <Row className='mt-3 text-light'>
                <Col className='d-flex justify-content-center flex-column'>
                    <h4 className='text-secondary'>Correzioni da parte della community!</h4>
                    <p>Chiedi, correggi, interagisci con gli utente della community nel nostro forum.<br/>Trovarai persone disponibili ad aiutarti con il giapponese e con la cultura giapponese.</p>
                    <Button className='shadow border-0 text-uppercase text-primary fw-bold mx-5' variant="secondary">Forum!</Button>

                    <h4 className='text-secondary mt-5'>Giochi di parole!</h4>
                    <p>Pittari offre una selezione di mini-giochi per poter imparare nuove parole.</p>
                    <Button className='shadow border-0 text-uppercase text-primary fw-bold mx-5' variant="secondary">Gioca!</Button>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <img src={speak} alt="immagine di due persone che parlano" className='welcome' />
                </Col>
            </Row>
        </div>
    </>
  )
}

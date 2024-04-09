import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import speak from '../../assets/img/speak.png';
import { NavLink } from 'react-router-dom';
import { Book, People } from 'react-bootstrap-icons';

export default function Section1Comp() {
  return (
    <>
        <div className='bg-primary p-5'>
            <h2 className='text-secondary fw-semibold text-center text-uppercase'>Totalmente gratuito!</h2>
            <Row className='mt-3 text-light'>
                <Col className='d-flex justify-content-center flex-column'>

                    <h2 className='text-primary my-4 text-center border border-light bg-light rounded-4 p-2'>Immergiti nel mondo di Pittari! </h2>
                    <div className='d-flex align-items-center flex-column flex-md-row text-center'>
                        <div className='d-flex flex-column justify-content-between'>
                            <div className='text-center'>
                                <People className='fs-1' />
                            </div>
                            <h4 className='text-secondary mt-1 fw-semibold'>Correzioni da parte della community!</h4>
                            <p>Chiedi, correggi, interagisci.<br/>Trovarai persone disponibili ad aiutarti con il giapponese e con la cultura giapponese.</p>
                            <NavLink to='/forum' className='shadow border-0 text-uppercase text-primary fw-bold mx-5 bg-secondary text-decoration-none btn'>FORUM!</NavLink>
                        </div>

                        <div className='d-flex flex-column justify-content-center mt-5 mt-md-0'>
                            <div className='text-center'>
                                <Book className='fs-1' />
                            </div>
                            <h4 className='text-secondary mt-1 fw-semibold'>Giochi di parole!</h4>
                            <p>Pittari offre una selezione di mini-giochi per poter imparare nuove parole. <br/> Quiz, flash cards e tanto altro!</p>
                            <NavLink to='/learn' className='shadow border-0 text-uppercase text-primary fw-bold mx-5 bg-secondary text-decoration-none btn'>GIOCA!</NavLink>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <img src={speak} alt="immagine di due persone che parlano" className='welcome' />
                </Col>
            </Row>
        </div>
    </>
  )
}

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import articleHomepage from '../../assets/img/articleHomepage.jpg'
import { Paperclip } from 'react-bootstrap-icons';

export default function Section2Comp() {
  return (
    <>
        <div className='bg-primary-emphasis p-5'>
            <h2 className='text-secondary fw-semibold text-center text-uppercase lh-base'>Leggi articoli <span className='fw-bold border bg-white rounded-5 text-primary p-1'>interessanti</span> 😲</h2>
            <Row className='mt-3 text-light'>
                <Col className='d-flex justify-content-center align-items-center flex-column'>
                <img className="welcome" src={articleHomepage} alt="immagine di una ragazza che legge il giornale" />
                </Col>
                <Col className='d-flex flex-column justify-content-center position-relative jump'>
                    <Paperclip className='fs-1 position-absolute bottom-50 end-100'/>
                    <h4>Articoli di ogni genere!</h4>
                    <p>Immergiti in viaggi culturali attraverso i nostri articoli che esplorano le diverse tradizioni del Giappone e offrono approfondimenti sulla lingua e sulla letteratura.</p>
                    <NavLink to='/articles' className='shadow border-0 text-uppercase text-primary fw-bold mx-5 bg-secondary text-decoration-none btn'>LEGGI!</NavLink>
                </Col>
            </Row>
        </div>
    </>
  )
}

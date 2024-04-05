import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import placeholder from '../../assets/img/hashi.jpg'

export default function LastGameComp() {
  return (
    <>
        <div className='bg-primary-darker text-light p-5'>
            <Container>
                <div className='lastGame bg-primary-emphasis p-4 rounded-4 shadow'>
                    <h5 className='opacity-75'>Cosa stai studiando</h5>
                    <h2>Titolo gioco</h2>

                    <Row>
                        <Col>
                            <img src={placeholder} alt="ultimo gioco" /> 
                        </Col>
                        <Col>
                            <p>Argomento</p>
                            <p>Difficoltà</p>
                        </Col>
                    </Row>

                    <div className='mt-3'>
                        <Button variant='secondary' className='text-dark'>INIZIA</Button>
                    </div>

                </div>
            </Container>
        </div>
    </>
  )
}

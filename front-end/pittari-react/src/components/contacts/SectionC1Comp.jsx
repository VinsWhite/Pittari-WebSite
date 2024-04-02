import React from 'react'
import contactImage from '../../assets/img/contactImage.png'
import { Container } from 'react-bootstrap'

export default function SectionC1Comp() {
  return (
    <>
        <Container className='p-5 d-flex flex-column align-items-center'>
            <h2 className='fs-1 text-primary fw-semibold'>Contattaci!</h2>
            <p className='fs-5'>Hai bisogno di particolare assistenza? Vuoi segnalarci un bug o un problema col sito?
                <br />Scrivici qui!</p>

            <img className='contactImage shadow border border-2 border-secondary rounded-circle' src={contactImage} alt="immagine di un ragazzo che indica il mondo" />
        </Container>
    </>
  )
}

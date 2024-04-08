import React from 'react'
import { Container } from 'react-bootstrap'

export default function KuizuGeemu() {
  return (
    <Container fluid className='bg-primary-darker p-5 d-flex justify-content-center'>
        <div className='p-5 bg-secondary rounded-4 quiz'>
            <h2>Domanda</h2>
            <ul>
                <li>Risposta 1</li>
                <li>Risposta 2</li>
                <li>Risposta 3</li>
                <li>Risposta 4</li>
            </ul>
        </div>
    </Container>
  )
}

import React from 'react'
import { useLocation } from "react-router-dom";
import { Container } from 'react-bootstrap'

export default function AnswerPage() {
    const location = useLocation();
    const howManyCorrected = location.state?.howManyCorrected;
    const maxQuestions = location.state?.maxQuestions;

  return (
    <>
        <Container fluid className='bg-primary-darker text-light p-5 d-flex align-items-center justify-content-center'>

            <div className='bg-primary p-5 rounded-4 text-center'>
                {howManyCorrected > (maxQuestions / 2 + 1) ? (
                    <>
                        <p>おめでとうございます!</p>
                        <p className='fw-semibold'>Risposte corrette: {howManyCorrected}</p>
                    </>
                ) : (
                    <>
                        <p>Risposte corrette: {howManyCorrected}</p>
                    </>
                )}
            </div>
        </Container>
    </>
  )
}

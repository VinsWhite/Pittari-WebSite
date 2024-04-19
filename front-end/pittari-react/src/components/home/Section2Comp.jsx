import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import readingAnimation from '../../assets/animations/readingAnimation.json'
import Lottie from 'lottie-react'
import { Paperclip } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';

export default function Section2Comp() {

  const [isVisible, setIsVisible] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView && !animationCompleted) {
      setIsVisible(true);
      setAnimationCompleted(true);
    }
  }, [inView, animationCompleted]);

  return (
    <>
        <div className='bg-primary-darker p-5'>
            <h2 ref={ref} className={`text-secondary fw-semibold text-center text-uppercase lh-base ${isVisible ? 'animationFromBottom' : 'opacity-0'}`}>Leggi articoli <span className='fw-bold border bg-white rounded-5 text-primary p-1'>interessanti</span> 😲</h2>
            <Row className='mt-3 text-light'>
                <Col className='d-flex justify-content-center align-items-center flex-column mt-3' sm={12} lg={6}>
                <Lottie className='welcome bg-primary shadow' animationData={readingAnimation} />
                </Col>
                <Col className='d-flex flex-column justify-content-center position-relative mt-3 jump' sm={12} lg={6}>
                    <Paperclip className='fs-1 position-absolute bottom-50 end-100'/>
                    <h4 className={`${isVisible ? 'animationFromBottom' : 'opacity-0'}`}>Articoli di ogni genere!</h4>
                    <p className={`${isVisible ? 'animationFromBottom' : 'opacity-0'}`}>Immergiti in viaggi culturali attraverso i nostri articoli che esplorano le diverse tradizioni del Giappone e offrono approfondimenti sulla lingua e sulla letteratura.</p>
                    <NavLink to='/articles' className={`shadow border-0 text-uppercase text-primary fw-bold mx-5 bg-secondary text-decoration-none btn m t-4 ${isVisible ? 'animationFromBottom' : 'opacity-0'}`}>LEGGI!</NavLink>
                </Col>
            </Row>
        </div>
    </>
  )
}

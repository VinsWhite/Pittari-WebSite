import React, {useEffect} from 'react'
import { Container, Button } from 'react-bootstrap'
import Lottie from 'lottie-react'
import animation404 from '../assets/animations/404Animation.json'
import { useNavigate } from 'react-router-dom'
import scrollToTop from '../assets/functions/scrollToTop'

export default function NotFoundpage() {

  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, [])
  

  const handleClick = () => {
    navigate('/');
  }

  return (
    <Container fluid className='bg-secondary p-2'>
      <div className='d-flex flex-column justify-content-center align-items-center m-5'>
        <h2 className='text-uppercase fw-bold position-absolute z-1 opacity-75 jersey-15-regular'>Dove stai guardando? Il Giappone non è qui...</h2>
        <Lottie className='image404' animationData={animation404} />
        <h3 className='text-primary fw-semibold'>ERRORE 404</h3>
        <Button onClick={handleClick}>Homepage</Button>
      </div>
    </Container>
  )
}

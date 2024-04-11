import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { PersonAdd, PersonBadge } from 'react-bootstrap-icons';

function CookieConsent({ showModal, setShowModal }) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem('cookieAccepted');
    if (isAccepted) {
      setAccepted(true);
    } else {
      setShowModal(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', true);
    setAccepted(true);
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={() => {}}>
      <Modal.Header closeButton>
        <Modal.Title>Cookie Policy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className='fw-semibold'>Prima di continuare su Pittari</h3>
        <p>Usiamo i <span className='fw-semibold'>cookie</span> e il <span className='fw-semibold'>localStorage</span> per:</p>
        <div className='border-bottom border-dark'>
            <p><PersonAdd /> Memorizzare le informazioni relative alle ultime attività all'interno del sito nella sezione impara, ad esempio i contenuti visualizzati e le impostazioni preferite.</p>
            <p><PersonBadge /> Memorizzare l'avvenuto accesso e mantenere l'utente connesso durante le sessioni successive.</p>
        </div>
        <p>Per ulteriori informazioni su come gestiamo i dati personali, consulta la nostra <a href="/privacy-policy" className="text-primary">politica sulla privacy</a>.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='rounded-4 fw-semibold' onClick={acceptCookies}>Accetto</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CookieConsent;

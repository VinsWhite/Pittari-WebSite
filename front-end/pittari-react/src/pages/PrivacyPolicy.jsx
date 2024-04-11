import React from 'react'
import { Container } from 'react-bootstrap' 
import { useEffect } from 'react';

export default function PrivacyPolicy() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' 
    });
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <>
      <Container fluid className='bg-secondary p-5'>
        <h2 className='fw-bold'>Politica sui dati</h2>
        <h5>Ultimo aggiornamento: 11 aprile 2024</h5>
        <p>Grazie per visitare il nostro sito web Pittari. La tua privacy è importante per noi e vogliamo che tu comprenda come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali. Questa privacy policy descrive le nostre pratiche in materia di raccolta e trattamento dei dati personali tramite il nostro Sito.</p>
        <h4 className='fw-semibold mt-4'>Dati raccolti</h4>
        <p>Raccogliamo i seguenti tipi di informazioni personali quando interagisci con il nostro Sito:</p>
        <ul>
          <li>Informazioni di contatto: Nome, Cognome, indirizzo email</li>
          <li>Informazioni fornite volontariamente: post e risposte nel forum</li>
        </ul>
        <h4 className='fw-semibold mt-4'>Utilizzo delle informazioni</h4>
        <p>Utilizziamo le informazioni personali raccolte per il regolare funzionamento del sito.</p>
        <h4 className='fw-semibold mt-4'>Condivisione delle informazioni</h4>
        <p>Non vendiamo, affittiamo o condividiamo le tue informazioni personali con terze parti.</p>
        <h4 className='fw-semibold mt-4'>Modifiche alla privacy policy</h4>
        <p>Ci riserviamo il diritto di modificare questa privacy policy in qualsiasi momento. Le modifiche saranno pubblicate sul Sito e l'uso continuato del Sito costituirà l'accettazione di tali modifiche.</p>
        <h4 className='fw-semibold mt-5'>Contatti</h4>
        <p>Per domande o commenti sulla nostra privacy policy, contattaci all'indirizzo email <span className='text-primary text-decoration-underline'>example@example.com</span></p>
      </Container>
    </>
  )
}

import React from 'react'
import HeadingGamesComp from '../../components/games/HeadingGamesComp'
import LastGameComp from '../../components/games/LastGameComp'
import AllGames from '../../components/games/AllGames'
import { useEffect, useState } from 'react'
import CookieConsent from '../CookieConsent'

export default function HomepageG() {

  const [showModal, setShowModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' 
    });
  };

  useEffect(() => {
    scrollToTop();
    if (!localStorage.getItem('cookieAccepted')) {
      setShowModal(true);
    }
  });

  return (
    <>
      <HeadingGamesComp />
      <LastGameComp />
      <AllGames />
      {!localStorage.getItem('cookieAccepted') && <CookieConsent showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

import React from 'react'
import HeadingGamesComp from '../../components/games/HeadingGamesComp'
import LastGameComp from '../../components/games/LastGameComp'
import AllGames from '../../components/games/AllGames'
import { useEffect, useState } from 'react'
import CookieConsent from '../CookieConsent'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import scrollToTop from '../../assets/functions/scrollToTop'

export default function HomepageG() {

  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector(state => state.users.token !== null); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    scrollToTop();
    if (!localStorage.getItem('cookieAccepted')) {
      setShowModal(true);
    }
  });

  return isLoggedIn ? (
    <>
      <HeadingGamesComp />
      <LastGameComp />
      <AllGames />
      {!localStorage.getItem('cookieAccepted') && <CookieConsent showModal={showModal} setShowModal={setShowModal} />}
    </>
  ) : null;
}

import React from 'react'
import HeadingComp from '../../components/forum/HeadingComp'
import TopicsComp from '../../components/forum/TopicsComp'
import DividerComp from '../../components/forum/DividerComp'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import CookieConsent from '../CookieConsent'
import scrollToTop from '../../assets/functions/scrollToTop'

export default function HomepageF() {

  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.users.token !== null); 
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null; 
  }

  useEffect(() => {
    scrollToTop();
    if (!localStorage.getItem('cookieAccepted')) {
      setShowModal(true);
    }
  }, []);

  return (
    <>
      <HeadingComp />
      <TopicsComp />
      <DividerComp />
      {!localStorage.getItem('cookieAccepted') && <CookieConsent showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

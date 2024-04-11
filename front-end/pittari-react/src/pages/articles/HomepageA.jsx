import React from 'react'
import HeadingComp from '../../components/articles/HeadingComp'
import ArticlesComp from '../../components/articles/ArticlesComp'
import DividerComp from '../../components/articles/DividerComp'
import { useEffect } from 'react'
import CookieConsent from '../CookieConsent'
import { useState } from 'react'

export default function HomepageA() {

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
      <HeadingComp />
      <ArticlesComp />
      <DividerComp />
      {!localStorage.getItem('cookieAccepted') && <CookieConsent showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

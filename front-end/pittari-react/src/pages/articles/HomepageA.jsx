import React from 'react'
import HeadingComp from '../../components/articles/HeadingComp'
import ArticlesComp from '../../components/articles/ArticlesComp'
import DividerComp from '../../components/articles/DividerComp'
import { useEffect } from 'react'
import CookieConsent from '../CookieConsent'
import { useState } from 'react'
import scrollToTop from '../../assets/functions/scrollToTop'

export default function HomepageA() {

  const [showModal, setShowModal] = useState(false);

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

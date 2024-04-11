import React from 'react'
import HeroComp from '../components/home/HeroComp'
import GeneralDividerComp from '../components/GeneralDividerComp'
import Section1Comp from '../components/home/Section1Comp'
import Section2Comp from '../components/home/Section2Comp'
import LastSectionHomeComp from '../components/home/LastSectionHomeComp'
import { useEffect } from 'react'
import { useState } from 'react'
import CookieConsent from './CookieConsent'

export default function Homepage() {

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
  },[]);

  return (
    <>
      <HeroComp />
      <GeneralDividerComp />
      <Section1Comp />
      <Section2Comp />
      <LastSectionHomeComp />
      <GeneralDividerComp />
      {!localStorage.getItem('cookieAccepted') && <CookieConsent showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

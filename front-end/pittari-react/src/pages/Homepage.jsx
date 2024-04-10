import React from 'react'
import HeroComp from '../components/home/HeroComp'
import GeneralDividerComp from '../components/GeneralDividerComp'
import Section1Comp from '../components/home/Section1Comp'
import Section2Comp from '../components/home/Section2Comp'
import LastSectionHomeComp from '../components/home/LastSectionHomeComp'
import { useEffect } from 'react'

export default function Homepage() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' 
    });
  };

  useEffect(() => {
    scrollToTop();
  },[]);

  return (
    <>
      <HeroComp />
      <GeneralDividerComp />
      <Section1Comp />
      <Section2Comp />
      <LastSectionHomeComp />
      <GeneralDividerComp />
    </>
  )
}

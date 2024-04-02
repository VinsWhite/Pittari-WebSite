import React from 'react'
import HeroComp from '../components/home/HeroComp'
import GeneralDividerComp from '../components/GeneralDividerComp'
import Section1Comp from '../components/home/Section1Comp'
import Section2Comp from '../components/home/Section2Comp'

export default function Homepage() {
  return (
    <>
      <HeroComp />
      <GeneralDividerComp />
      <Section1Comp />
      <Section2Comp />
    </>
  )
}

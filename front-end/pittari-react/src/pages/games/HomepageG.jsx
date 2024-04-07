import React from 'react'
import HeadingGamesComp from '../../components/games/HeadingGamesComp'
import LastGameComp from '../../components/games/LastGameComp'
import AllGames from '../../components/games/AllGames'
import { useEffect } from 'react'

export default function HomepageG() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <>
      <HeadingGamesComp />
      <LastGameComp />
      <AllGames />
    </>
  )
}

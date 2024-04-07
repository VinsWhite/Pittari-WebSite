import React from 'react'
import HeadingComp from '../../components/articles/HeadingComp'
import ArticlesComp from '../../components/articles/ArticlesComp'
import DividerComp from '../../components/articles/DividerComp'
import { useEffect } from 'react'

export default function HomepageA() {

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
      <HeadingComp />
      <ArticlesComp />
      <DividerComp />
    </>
  )
}

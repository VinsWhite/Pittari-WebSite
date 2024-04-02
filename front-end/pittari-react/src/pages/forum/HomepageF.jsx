import React from 'react'
import HeadingComp from '../../components/forum/HeadingComp'
import TopicsComp from '../../components/forum/TopicsComp'
import DividerComp from '../../components/forum/DividerComp'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function HomepageF() {

  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.users.token !== null); 

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null; 
  }

  return (
    <>
      <HeadingComp />
      <TopicsComp />
      <DividerComp />
    </>
  )
}

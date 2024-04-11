import React from 'react'

export default function HeadingArtComp() {

  const userName = localStorage.getItem('name');

  return (
    <div className='p-5 text-center bg-warning'>
        <h2 className='text-light fw-bold welcomeSection'>Bentornato <span className='text-decoration-underline'> {userName}</span> , aggiungi un nuovo articolo!</h2>
    </div>
  )
}

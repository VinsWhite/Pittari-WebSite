import React from 'react'

export default function HeadingProfileComp() {
    const userName = localStorage.getItem('name');
  return (
    <div className='p-5 text-center bg-primary-darker'>
        <h2 className='text-light fw-bold welcomeSection'>Bentornato <span className='text-decoration-underline'> {userName}</span>!</h2>
    </div>
  )
}

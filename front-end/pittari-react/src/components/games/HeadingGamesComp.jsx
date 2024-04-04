import React from 'react';

export default function HeadingGamesComp() {

    const greetings = () => {
        const currentDate = new Date().getHours();
        
        if (currentDate > 6 && currentDate < 12) {
            return 'Buon giorno! おはようございます～ ☀️';
        } else if (currentDate >= 12 && currentDate < 19) {
            return 'Buon pomeriggio! こんばんは～ 🌇';
        } else {
            return 'Buona sera! こんばんは～ 🌕';
        }
    }

  return (
    <div className='p-5 text-center bg-primary-emphasis'>
        <h2 className='text-light fw-bold welcomeSection'>{greetings()}</h2>
    </div>
  );
}

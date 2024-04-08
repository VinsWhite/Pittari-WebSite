import React from 'react';

export default function HeadingGamesComp() {

    const greetings = () => {
        const currentDate = new Date().getHours();
        
        if (currentDate > 5 && currentDate < 12) {
            return 'Buon giorno! おはようございます～ ☀️';
        } else if (currentDate >= 12 && currentDate < 18) {
            return 'Buon pomeriggio! こんばんは～ 🌇';
        } else if (currentDate >= 18 && currentDate < 23) {
            return 'Buona sera! こんばんは～ 🌕';
        } else {
            return 'Ancora sveglio? Buona notte! おやすみなさい～ 🌕';
        }
    }

  return (
    <div className='p-5 text-center bg-primary-emphasis'>
        <h2 className='text-light fw-bold welcomeSection'>{greetings()}</h2>
    </div>
  );
}

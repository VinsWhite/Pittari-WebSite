import React, { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'react-bootstrap-icons';

export default function ToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 700);
        };

        window.addEventListener('scroll', handleScroll);

        // puliamo il listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <ArrowUpCircle
                    onClick={handleTop}
                    className='bg-secondary fs-2 rounded-circle shadow toTop'
                />
            )}
        </>
    );
}

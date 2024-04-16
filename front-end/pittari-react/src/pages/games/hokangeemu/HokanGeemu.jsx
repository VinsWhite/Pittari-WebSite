import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from '../../../api/axios';
import scrollToTop from '../../../assets/functions/scrollToTop';
import stock from '../../../assets/functions/stock';

export default function HokanGeemu() {
    const [phrase, setPhrase] = useState(null);
    const [translation, setTranslation] = useState(null);
    const [hiddenIndex, setHiddenIndex] = useState(null);
    const [hiddenCharacter, setHiddenCharacter] = useState(null);

    useEffect(() => {
        scrollToTop();
        fetchRandomPhrase();
    }, []);

    const fetchRandomPhrase = async () => {
        try {
            const pageCount = await getPageCount();
            const randomPage = Math.floor(Math.random() * pageCount) + 1;
            const api = `/tatoebaApi?page=${randomPage}`;
            const response = await axios.get(api);
            const randomIndex = Math.floor(Math.random() * response.data.results.length);
            const randomPhrase = response.data.results[randomIndex];
            setPhrase(randomPhrase.text);
            if (randomPhrase.translations[1].length > 0) {
                const randomTranslation = randomPhrase.translations[1][0].text;
                setTranslation(randomTranslation);
            }
            const randomWordIndex = Math.floor(Math.random() * randomPhrase.text.split(' ').length);
            const randomWord = randomPhrase.text.split(' ')[randomWordIndex];
            const hiddenCharIndex = Math.floor(Math.random() * randomWord.length);
            setHiddenIndex(randomWordIndex);
            setHiddenCharacter(randomWord.charAt(hiddenCharIndex));
        } catch (error) {
           /*  console.log(error); */
        }
    };

    const getPageCount = async () => {
        try {
            const response = await axios.get('/tatoebaApi');
            return response.data.paging.Sentences.pageCount;
        } catch (error) {
            console.log(error);
        }
    };

    const renderPhraseWithHiddenCharacter = () => {
        if (!phrase || hiddenIndex === null) return null;
        const words = phrase.split(' ');
        return (
            <p>
                {words.map((word, index) => {
                    if (index === hiddenIndex) {
                        // Nascondi il carattere mancante nella parola
                        return (
                            <span key={index}>
                                {word.slice(0, word.indexOf(hiddenCharacter))}
                                <span>_</span>
                                {word.slice(word.indexOf(hiddenCharacter) + 1)}
                            </span>
                        );
                    } else {
                        return <span key={index}>{word}</span>;
                    }
                })}
            </p>
        );
    };

    return (
        <>
            <Container fluid className='bg-primary-darker p-5'>
                <div className='m-5 p-4 bg-secondary rounded-4'>
                    <h2 className='border-bottom border-dark pb-2'>Completa la frase!</h2>
                    {phrase ? (
                        <div>
                            {renderPhraseWithHiddenCharacter()}
                            {translation && <p>{translation}</p>}
                            {hiddenCharacter && 
                                <>
                                    <Button>{hiddenCharacter}</Button>
                                </>
                            }
                        </div>
                    ) : (
                        <div className='text-center'>
                            <p>Caricamento...</p>
                            <p className='opacity-75'>{stock()}</p>
                        </div>
                    )}
                </div>
            </Container>
        </>
    );
}

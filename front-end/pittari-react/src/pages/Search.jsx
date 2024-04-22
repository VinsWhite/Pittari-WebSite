import React, { useState } from 'react';
import axios from '../api/axios';
import { Button, Container } from 'react-bootstrap';
import HeadingSearchComp from '../components/Search/HeadingSearchComp';
import scrollToTop from '../assets/functions/scrollToTop';
import { useEffect } from 'react';

export default function Search () {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        scrollToTop();
    }, []);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/jishoApi/${searchTerm}`);
            setSearchResults(response.data.data);
            setSearchError('');
            setLoading(false)
        } catch (error) {
            /* console.error('Error fetching data:', error); */
            setSearchError('Errore nel recuperare i dati. Si prega di riprovare.');
            setLoading(false)
        }
    };

    return (
        <>
            <HeadingSearchComp />
            <Container fluid className='p-5 bg-secondary'>
                <div>
                    <h4>Cerca qualsiasi parola in romaji, hiragana, katakana, kanji. <br/>
                        <span className='opacity-50 text-primary'>La ricerca è disponibile solo in inglese</span></h4>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter search term"
                        className='mt-5'
                    />
                    <Button className='ms-2' onClick={handleSearch}>Search</Button>
                    {loading &&
                        <p>Loading...</p>
                    }

                    {searchError && <p className="text-danger">{searchError}</p>}
                    
                    {searchResults.length > 0 && (
                        <ul className='pt-4'>
                            {searchResults.map((wordData, index) => ( 
                                <li key={index}> 
                                    <h3 className='text-primary fw-semibold'>{wordData.slug}</h3>
                                    <ul className='pt-2'>
                                        {wordData.japanese.map((japaneseItem, innerIndex) => ( 
                                            <li key={innerIndex}>
                                                <div>Word: {japaneseItem.word}</div>
                                                <div>Reading: {japaneseItem.reading}</div>
                                            </li>
                                        ))}
                                    </ul>
                                    <h4>Senses:</h4>
                                    <ul className='pt-2'>
                                        {wordData.senses.map((sense, innerIndex) => ( 
                                            <li key={innerIndex}>
                                                <div>Definition: {sense.english_definitions.join(', ')}</div>
                                                <div>Parts of Speech: {sense.parts_of_speech.join(', ')}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </Container>
        </>
    );
};

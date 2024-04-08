import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios';
import stock from '../../assets/functions/stock';

export default function KuizuGeemu() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);
    const [usedQuestions, setUsedQuestions] = useState([]);
    const [questionsCount, setQuestionsCount] = useState(0);
    const maxQuestions = 10;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/allArguments');
            setData(response.data);
            generateQuestion(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Errore:', error);
            setLoading(false);
        }
    };

    const generateQuestion = (data) => {
        if (questionsCount >= maxQuestions) {
            return;
        }

        if (data.fruits && data.fruits.length > 0) {
            const selectedData = Math.random() < 0.5 ? data.fruits : data.pronouns;
            let selectedElement;

            // viene prelevata una nuova domanda finché ce ne sono disponibili
            do {
                const randomIndex = Math.floor(Math.random() * selectedData.length);
                selectedElement = selectedData[randomIndex];
            } while (usedQuestions.includes(selectedElement.id) && usedQuestions.length < selectedData.length);

            const questionText = `Cosa significa "${selectedElement.japanese_name}"?`;
            const correctAnswer = selectedElement.italian_translation;

            const allTranslations = selectedData.map(item => item.italian_translation);
            const randomTranslations = getRandomTranslations(allTranslations, correctAnswer);

            const shuffledAnswers = shuffleArray([...randomTranslations, correctAnswer]);

            setQuestion(questionText);
            setAnswers(shuffledAnswers);

            // aggiorniamo le domande utilizzate e il conteggio
            setUsedQuestions([...usedQuestions, selectedElement.id]);
            setQuestionsCount(questionsCount + 1);
        }
    };

    const getRandomTranslations = (allTranslations, correctAnswer) => {
        const randomTranslations = [];
        while (randomTranslations.length < 3) {
            const randomIndex = Math.floor(Math.random() * allTranslations.length);
            const randomTranslation = allTranslations[randomIndex];
            if (randomTranslation !== correctAnswer && !randomTranslations.includes(randomTranslation)) {
                randomTranslations.push(randomTranslation);
            }
        }
        return randomTranslations;
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleNextQuestion = () => {
        generateQuestion(data);
    };

    const handleEndQuestion = () => {
        navigate('/learn');
    }

    return (
        <Container fluid className='bg-primary-darker p-5 d-flex justify-content-center'>
            <div className='p-5 bg-secondary rounded-4 quiz'>
                {loading ? (
                    <>
                        <div className='text-center'>
                            <p>Caricamento...</p>
                            <p className='opacity-75'>{stock()}</p>
                        </div>
                    </>
                ) : (
                    
                    <>
                        <p className='opacity-75'>Domande {questionsCount} / {maxQuestions}</p>
                        <h2>{question}</h2>
                        <ul>
                            {answers.map((answer, index) => (
                                <li key={index}>{answer}</li>
                            ))}
                        </ul>

                        {questionsCount < maxQuestions ? (
                            <Button className='btn-gray' onClick={handleNextQuestion}>Avanti</Button>
                            ) : (
                                <Button onClick={handleEndQuestion}>Fine</Button>
                            )
                        }
                    </>

                )}
            </div>
        </Container>
    );
}

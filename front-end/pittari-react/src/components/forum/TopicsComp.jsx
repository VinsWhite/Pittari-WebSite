import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../api/axios'
import {setTopics} from '../../state/slice/topicsSlice'
import { NavLink } from 'react-router-dom'

import forum from '../../assets/img/forum.jpg'
import forum2 from '../../assets/img/forum2.jpg'


export default function TopicsComp() {
    const topics = useSelector(state => state.topics)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTopics = async () => {
          try {
            const response = await axios.get('/topics');
            dispatch(setTopics(response.data)); 
          } catch (error) {
            console.error('Errore durante il recupero dei topics:', error);
          }
        };
    
        fetchTopics();
    }, [dispatch]); 
    

  return (
    <>
    <Container fluid className='bg-primary-darker'>
            <div className='py-5 text-light container'>
                <Row>
                    <Col xs={12} lg={4} className='text-center mx-2 d-flex flex-column justify-content-around align-items-center'>
                        <img className='forumImage' src={forum} alt="forum" />
                        <img className='forumImage my-3 mt-lg-0' src={forum2} alt="forum" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2 className='fw-bold'>Tutti i topics</h2>
                        <div>
                            {topics.map(topic => (
                                <NavLink key={topic.id} to={`/forum/topics/${topic.id}`} className="nav-link-custom">
                                    <div className='border border-secondary my-2 p-2 shadow forum'>
                                        <div>
                                            <h4 className='fw-semibold'>{topic.title}</h4>
                                            <p>{topic.description}</p>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
  )
}

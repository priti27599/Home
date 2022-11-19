import React from 'react'
import { Container, Row } from 'react-bootstrap';
import './Body.css';
import Card from './Card';

const Body = () => {
    return (
        <section className='body' id="body">
            <Container>
                <Row>
                    <div className='title'>
                        <div>
                            <span className='main-title'>What's On At Glasgow's Coolest Event Space.</span>
                            <span className='view'>View All</span>
                        </div>
                    </div>
                    <Card />
                    <div className='ca'>
                        <Card />
                        <Card />
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Body
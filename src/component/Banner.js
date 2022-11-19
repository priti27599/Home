import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const Banner = () => {

    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className='box'>
                        <div className='box1'>
                            <h1>The perfect night out in Glasgow</h1>
                            <h2>18 Candleriggs
                                <br />
                                ON 14TH & 15TH FEB</h2>

                            <HashLink to="#venue"> <button className='btn' >Book Tickets</button></HashLink>

                            <h3>3 course meal & show included £ 17 per person </h3>
                        </div>
                    </Row>
                </Container>
            </section>
        </Router>
    );
}

export default Banner
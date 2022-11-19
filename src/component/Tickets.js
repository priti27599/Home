import React from 'react';
import { Col, Row } from 'react-bootstrap';
import tic1 from '../images/Picture5.png';
import tic2 from '../images/pic1.jpg';
import tic3 from '../images/pic2.jpg';
import './Tickets.css';

const Tickets = () => {
    return (
        <section className='tic'>
            <Row>
                <div className='title1'>
                    <div>
                        <span className='main-title1'>Must See Events</span>
                        <span className='view1'>View All</span>
                    </div>
                </div>
                <Col>
                    <div className='tic2'>
                        <img src={tic2} className="pic1" />
                        <img src={tic1} className="pic2" />
                        <img src={tic3} className="pic3" />
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Tickets
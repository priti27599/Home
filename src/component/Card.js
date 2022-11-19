import React from 'react';
import { Col, Row } from 'react-bootstrap';
import image1 from '../images/Picture2.png';
import image2 from '../images/Picture3.png';
import image3 from '../images/Picture4.png';
import { TiTicket } from 'react-icons/ti';
import { AiFillClockCircle } from 'react-icons/ai'
import { AiOutlineCalendar } from 'react-icons/ai';
import './Body.css';

const Card = () => {
    const cardItem = [
        {
            title: "The Rocky Horror Tribute Show",
            image: image1,
            description1: "The UK's Leading Premier tribute to the hit stage show and classic 1975 film.",
            description2: "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
            ticket: 17,
            date: "10th December 2022"
        },
        {
            title: "CABARET SHOW",
            image: image2,
            description1: "Join us for a spectacular cabaret show",
            description2: "where you can expect a jaw-dropping evening of circus,burlesque, aerialist's and more! Amazing entertainment paired with a 3-course meal",
            ticket: 35,
            date: "19th October 2022"
        },
        {
            title: "Carnival of Carnage",
            image: image3,
            description1: "Get dressed to impress and join us for another incredible Carnival of Carnage show",
            description2: "with acts in pole, aerial, burlesque, comedy, drag and much more.",
            ticket: 10,
            date: "10th December 2022"
        },

    ]
    return (
        <section className='card1'>
            <Row>
                {
                    cardItem.map((item, index) => {
                        return (
                            <Col sm={6} md={5} lg={4}>
                                <div className='card2'>
                                    <img src={item.image} className="card-img" />
                                    <div className='card3'>
                                        <h4>{item.title}</h4>
                                        <div className='desc1'>
                                            <span>
                                                {item.description1}
                                            </span> 
                                        </div>  
                                        <div  className='desc2'>
                                            <span>
                                                {item.description2}
                                            </span>
                                        </div>

                                        <div className='detail'>
                                            <div>
                                                <TiTicket />
                                                <span className="de">Ticket £{item.ticket}</span>
                                            </div>
                                            <div>
                                                <AiFillClockCircle />
                                                <span className="de">Show 8pm|Doors 6pm</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='detail1'>
                                                <AiOutlineCalendar />
                                                <span className="de">{item.date}</span>
                                            </div>
                                            <button className='btn1'>Book Tickets</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </section>
    )
}

export default Card
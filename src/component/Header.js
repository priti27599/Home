import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo.jpg'
import { FiSearch } from 'react-icons/fi';
import './Header.css';
// import {Link} from "react-router-dom";

function Header() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // const onUpdateActiveLink = (value) => {
    //     setActiveLink(value);
    // };

    return (
        
            <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" className='logo' /></Navbar.Brand>
                    <input type="text" className='search-box' placeholder='Search' />
                    <FiSearch className='icon' />
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                               className='item'
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link className='item'>
                                What's on
                            </Nav.Link>

                            <Nav.Link className='item'
                            >
                                Book Venue
                            </Nav.Link>
                            <Nav.Link className='item'>
                                Gallery
                            </Nav.Link>

                            <Nav.Link className='item'>
                                Contact Us
                            </Nav.Link>
                           
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Header;
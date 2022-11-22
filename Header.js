import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../images/logo.jpg'
import { FiSearch } from 'react-icons/fi';
import './Header.css';

function Header() {
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
                           
                        <ul>
                            <li><a href='/' className='item'>Home</a></li>
                            <li><a href='/' className='item'>What's on</a></li>
                            <li><a href='/venue' className='item'>Book Venue</a></li>
                            <li><a href='/' className='item'>Contact Us</a></li>
                        </ul>
                        </Nav>
                    
                

                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Header;
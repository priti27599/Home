import React from 'react';
import './Footer.css';
import { MdEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='main-part'>
                <div className='part1'>
                    <h4 className='tit'>Get Event Updates</h4>
                    <div className='search1'>
                        <input placeholder='Enter email address' />
                        <button className='btn3'>Sumbit</button>
                    </div>
                </div>
                <div className='part2'>
                    <h4 className='tit1'>Contact Us</h4>
                    <div>
                        <MdEmail />
                        <span className='para'>events@18candleriggs.com</span>
                    </div>
                    <div>
                        <IoCall />
                        <span className='para'>07936558303</span>
                    </div>
                    <div className='logo1'>
                        <BsFacebook />
                        <FaInstagramSquare className='ic'/>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer
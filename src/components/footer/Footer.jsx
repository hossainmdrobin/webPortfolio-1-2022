import React from 'react';
import './footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="" className='footer__logo'>Robin</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#bout">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com">
                    <FaFacebook />
                </a>
                <a href="https://instagram.com">
                    <FiInstagram />
                </a>
                <a href="">
                    <FaTwitter />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy;EGAOT Tutorial. All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;

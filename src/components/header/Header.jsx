import React from 'react';
import CTA from './CTA';
import './header.css'
import me from './../../assets/robin.png'
import HeaderSocial from './HeaderSocial';
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Md. Robin Hossain</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <div className="me">
                    <img src={me} alt="me" />
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
                <HeaderSocial />
            </div>
        </header>
    );
}

export default Header;

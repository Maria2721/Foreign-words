import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer container">
            &copy; {new Date().getFullYear()} Copyright by&nbsp;<a href="https://github.com/Maria2721?tab=repositories" className="footer__link">Maria</a>
        </footer>
    )
}

export default Footer;
import React from 'react';

import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            &copy; {new Date().getFullYear()} Copyright by <a href="https://github.com/Maria2721?tab=repositories" className='link'> Maria</a>
        </div>
    )
}

export default Footer;
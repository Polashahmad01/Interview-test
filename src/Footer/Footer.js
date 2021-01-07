import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import Logo from '../image/1.png';

const Footer = () => {
    return (
        <div className="footer">
            <Link className="footer__brand" to="/">
                <img className="footer__logo" src={Logo} alt="losangeles-mountains" />
                <h3>Losangeles<span>Mountains</span></h3>
            </Link>
            <p>Copyright 2016. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
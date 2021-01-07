import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';
import Logo from '../image/1.png'

const Navbar = ({ scrollTop }) => {
    const header = useRef();

    if(scrollTop > 50) {
        header.current?.classList.add('navbarScroll')
    } else {
        header.current?.classList.remove('navbarScroll')
    }

    return (
        <>
            <div 
                className="navbar"
                ref={header}
            >
                <Link className="navbar__brand" to="/">
                    <img className="navbar__logo" src={Logo} alt="los-angeles-mountain" />
                    <h4 className="logoTitle"><span className="navbar__logoTextOne">LosAngeles</span><span className="navbar__logoTextTwo">Mountains</span></h4>
                </Link>
                <nav>
                    <ul className="navbar__links">
                        <li>
                            <Link to="/">
                                01. History
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                02. Team
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar

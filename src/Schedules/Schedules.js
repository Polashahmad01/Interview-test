import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './Schedules.css';
import Footer from '../Footer/Footer';

const Schedules = () => {
    return (
        <div className="schedules">
            <ul className="schedule__links">
                <li className="schedule__linkOne">
                    <Link to="/">
                        Mountain 1
                    </Link>
                </li>
                <li className="schedule__linkTwo">
                    <Link to="/">
                        Mountain 2
                    </Link>
                </li>
            </ul>
            <Fade left>
                <div className="schedule">
                    <h2>Schedule</h2>
                    <div className="schedule__date">
                        <ul>
                            <li>25 Nov 2016</li>
                            <li>28 Nov 2016</li>
                            <li></li>
                            <li>18 Dec 2016</li>
                            <li></li>
                            <li>7 Jan 2017</li>
                        </ul>
                        <div className="schedule__location">
                            <ul>
                                <li>Vestibulum viverra</li>
                                <li>Vestibulum viverra</li>
                                <li></li>
                                <li>Vestibulum viverra</li>
                                <li></li>
                                <li>Vestibulum viverra</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade right>
                <Footer />
            </Fade>
        </div>
    )
}

export default Schedules

import React from 'react';
import Fade from 'react-reveal/Fade';

import './History.css';
import personOne from '../image/person1.jpg';
import personTwo from '../image/person2.jpg';

const History = () => {
    return (
        <div className="history">
            <div className="history__container">
                <Fade right>
                    <div className="history__top">
                        <h1 className="history__heading">01<span className="dot">.</span> <span className="history__subheading">History</span></h1>
                        <p className="history__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra,
                            rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis
                            sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque
                            urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipt dignissim tortor nec
                            congue.
                        </p>
                    </div>
                </Fade>
                <div className="history__bottom">
                    <Fade left>
                        <div className="history__bottomCarousel">
                            <div className="history__bottomCarouselImages">
                                <div>
                                    <img className="history__bottomCarouselImage" src={personOne} alt="person" />
                                </div>
                                <div>
                                    <img className="history__bottomCarouselImage" src={personTwo} alt="person" />
                                </div>
                                <div>
                                    <img className="history__bottomCarouselImage" src={personOne} alt="person" />
                                </div>
                                <div>
                                    <img className="history__bottomCarouselImage" src={personTwo} alt="person" />
                                </div>
                            </div>
                            <div className="history__bottomCarouselDot">
                                <div className="history__bottomCarouselDots"/>
                                <div className="history__bottomCarouselDots"/>
                                <div className="history__bottomCarouselDots"/>
                                <div className="history__bottomCarouselDots"/>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="history__bottom__text">
                            <h1 className="history__bottomHeading">02. <span className="history__bottomSubHeading">Climb</span></h1>
                            <p className="history__bottomDescription">
                                Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac,
                                tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default History

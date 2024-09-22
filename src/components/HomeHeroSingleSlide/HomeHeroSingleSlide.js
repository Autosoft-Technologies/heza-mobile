import React from 'react';
import {Link} from 'react-router-dom';
import useGlobalContext from '../../hooks/useGlobalContext';

const HomeHeroSingleSlide = ({bg_className}) => {
    const videoPopup = useGlobalContext();
    const {setIsOpen} = videoPopup
    return (
        <>
            <div className={`single-slider slider-height d-flex align-items-center slider_bg_${bg_className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="hero-text">
                                <div className="hero-slider-caption ">
                                    {/*<h5>Reaward your clients with digital gifts.</h5>*/}
                                    <h1 className="white-color">Reliable Communication Platform.</h1>
                                    <h5 className="" style={{color: '#f79a19'}}>
                                        Heza Mobile is a Communication Platform that lets existing business software interact
                                        with customers using preferred APIs channels like SMS, Airtime & Data, USSD and
                                        WhatsApp Business.
                                    </h5>
                                </div>
                                <div className="hero-slider-btn btn-sm">
                                    <Link to="/contact" className="primary_btn btn-icon">Get in touch</Link>

                                    {/*<button onClick={() => setIsOpen(true)}
                              className="play-btn popup-video"><i className="fas fa-play"></i></button>*/}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeroSingleSlide;

import React from 'react';
import {Link} from 'react-router-dom';

const ServicesOneHiringArea = () => {
    return (
        <>
            <section className="hiring-area pt-50 pb-120">
                <div className="container">
                    <div className="row no-gutters hire-bg-2">
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-img">
                                <img className="img" src="img/hire/hire1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-text mt-50">

                                <h2>Mobile Data and Airtime</h2>
                                <p>Increase customer interactions and loyalty to your business by offering airtime or
                                    data in form of incentives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters hire-bg">
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-text mt-50">
                                <h2>WhatsApp Business </h2>
                                <p>Engage with your customers in real time via WhatsApp end to end encrypted messages.
                                </p>
                                {/*<Link to="/contact"*/}
                                {/*    className="primary_btn btn-icon ml-0"><span>+</span>apply today</Link>*/}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-img">
                                <img className="img" src="img/hire/hire2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="row no-gutters hire-bg-2">
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-img">
                                <img className="img" src="img/hire/hire3.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-text mt-50">
                                <h2>SMS</h2>
                                <p>Notify potential customers about your services in form of promotions and updates.
                                    Reduce online fraud through OTPs (One Time Passwords).
                                </p>
                                {/*<Link to="/contact"*/}
                                {/*      className="primary_btn btn-icon btn-icon-green ml-0"><span>+</span>Contact us</Link>*/}
                            </div>
                        </div>
                    </div>

                    <div className="row no-gutters hire-bg-2">
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-text mt-50">
                                <h2>USSD</h2>
                                <p>Create a real time transaction-based Engagement with mobile users using smart phone
                                    or feature phones and get constant feedback, make payments etc.
                                </p>
                                {/*<Link to="/contact"*/}
                                {/*      className="primary_btn btn-icon btn-icon-green ml-0"><span>+</span>Contact us</Link>*/}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-img">
                                <img className="img" src="img/hire/hire5.jpg" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ServicesOneHiringArea;

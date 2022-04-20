import React from 'react';

const CommonSectionArea = ({area_header}) => {
    return (
        <>
            <section className="about-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            {area_header}
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="about-right-side pt-55 mb-30">
                                <div className="about-title mb-20">
                                    <h3>Our Story</h3>
                                    {/*<h1>About Us</h1>*/}
                                </div>
                                <div className="about-text mb-50">

                                    <p>
                                        We provide mobile internet, talk time and sms to your customers. We have secured
                                        the network for high-speed data connections at prices that are fair enough for
                                        you to give back to a big number from your client's list.
                                    </p>
                                    <p>
                                        Our services allow you to give back to your clients with digital gifts that are
                                        truly unique and offers delivered directly into their inbox alerting them with
                                        about who and why you have chosen to give them a digital gift
                                    </p>
                                    <p>
                                        Every action we take puts our clients front of mind. In doing so, we ensure the
                                        best customer service and world class support which our stakeholders have come
                                        to love
                                    </p>
                                </div>
                                <div className="our-destination">
                                    <div className="single-item mb-30">
                                        <div className="mv-icon f-left">
                                            <img src="img/about/destination-icon-1.png" alt=""/>
                                        </div>
                                        <div className="mv-title fix">
                                            <h3>Our Mission</h3>
                                            <p>To enable companies give back to the community easily.</p>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="mv-icon f-left">
                                            <img src="img/about/destination-icon-2.png" alt=""/>
                                        </div>
                                        <div className="mv-title fix">
                                            <h3>Our Vission</h3>
                                            <p>To create good relationships between companies ans their clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommonSectionArea;

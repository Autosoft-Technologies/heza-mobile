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
                                    <h5>Our Story</h5>
                                    <h1>About Us</h1>
                                </div>
                                <div className="about-text mb-50">
                                    <p>In the era of all things linked cloud service, our products under adopt cloud
                                        communication technology with high reliability, high stability, low delay,
                                        strict security and privacy, and are distributed all over the world.</p>
                                    <p>
                                        Cooperate with 500 + international operators, from the perspective of enterprise
                                        product users, help enterprises connect world users with the square cloud that
                                        customers like, make it easier for more enterprises to communicate with users,
                                        and let users feel the sincerity of enterprises
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
                                            <p>To enable companies give back to the community easily</p>
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

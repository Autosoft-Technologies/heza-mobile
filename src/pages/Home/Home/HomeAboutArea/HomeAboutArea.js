import React from 'react';

const HomeAboutArea = () => {
    return (
        <>
            <section className="about-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 about_left">
                            <div className="medical-icon-brand-2">
                                <img src="img/about/medical-brand-icon-border.png" alt=""/>
                            </div>
                            <div className="about-left-side pos-rel mb-30">
                                <div className="about-front-img img-thumbnail rounded">
                                    <img src="img/about/about-img.jpg" alt=""/>
                                </div>
                                <div className="about-shape">
                                    <img src="img/about/about-shape.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="about-right-side pt-55 mb-30">
                                <div className="about-title mb-20">
                                    <h3>Our Story</h3>
                                    {/*<h1>About Us</h1>*/}
                                </div>
                                <div className="about-text">
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
                                    {/*<p>*/}
                                    {/*    Cooperate with 500 + international operators, from the perspective of enterprise*/}
                                    {/*    product users, help enterprises connect world users with the square cloud that*/}
                                    {/*    customers like, make it easier for more enterprises to communicate with users,*/}
                                    {/*    and let users feel the sincerity of enterprises.*/}

                                    {/*</p>*/}
                                    <p>
                                        Every action we take puts our clients front of mind. In doing so, we ensure the
                                        best customer service and world class support which our stakeholders have come
                                        to love
                                    </p>
                                </div>
                                <div className="about-author d-flex align-items-center">
                                    {/*<div className="author-ava">*/}
                                    {/*    <img src="img/about/author-ava.png" alt=""/>*/}
                                    {/*</div>*/}
                                    <div className="author-desination">
                                        <h4>Moses N</h4>
                                        <h6>Founder</h6>
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

export default HomeAboutArea;

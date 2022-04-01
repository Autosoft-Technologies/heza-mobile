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
                                <div className="about-front-img">
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
                                    <h5>Our Story</h5>
                                    <h1>About Us</h1>
                                </div>
                                <div className="about-text">
                                    <p>
                                        In the era of all things linked cloud service, our products under
                                        adopt cloud communication technology with high reliability, high stability, low
                                        delay, strict security and privacy, and are distributed all over the world.
                                    </p>
                                    <p>
                                        Cooperate with 500 + international operators, from the perspective of enterprise
                                        product users, help enterprises connect world users with the square cloud that
                                        customers like, make it easier for more enterprises to communicate with users,
                                        and let users feel the sincerity of enterprises.
                                    </p><br/>
                                </div>
                                <div className="about-author d-flex align-items-center">
                                    <div className="author-ava">
                                        <img src="img/about/author-ava.png" alt=""/>
                                    </div>
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

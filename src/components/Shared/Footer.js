import React from 'react';
import {Link} from 'react-router-dom';
import HomeSingleFooterBlog from '../HomeSingleFooterBlog/HomeSingleFooterBlog';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-top primary-bg footer-map pos-rel pt-120 pb-80">
                    <div className="container">
                        <div className="row align-items-center" style={{position: 'relative', zIndex: '9999'}}>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="footer-contact-info footer-contact-info-3 mb-40">
                                    <div className="footer-logo mb-35">
                                        <Link to="/"><img src="img/logo/heza-mobile-footer.png" alt="Heza logo"/></Link>
                                    </div>
                                    <div className="footer-contact-content mb-25">
                                        <p>
                                            We provide mobile internet, talk time and sms to your customers. We have
                                            secured the network for high-speed data connections at prices that are fair
                                            enough for you to give back to a big number from your client's list.
                                        </p>
                                        <div className="header-social-icons f-left d-none d-xl-block">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        {/*<div>*/}
                                        {/*    <ul>*/}
                                        {/*        <li>*/}
                                        {/*            /!*<a href="#"><i className="far fa-envelope" className="white-color"></i></a> &nbsp;*!/*/}
                                        {/*            <i className="fas fa-facebook"></i>*/}
                                        {/*        </li>*/}
                                        {/*    </ul>*/}

                                        {/*</div>*/}
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title">
                                        <h3>Links</h3>
                                    </div>
                                    <div className="footer-menu footer-menu-2">
                                        <ul>
                                            <li><Link to="/">Products</Link></li>
                                            <li><Link to="/about">Company</Link></li>
                                            <li><Link to="#">Usecases</Link></li>
                                            <li><Link to="/services">Developers</Link></li>
                                            <li><Link to="/contact">Contact us</Link></li>
                                            {/*<li><Link to="/servicesDetails">Appoinment</Link></li>*/}
                                            <li><Link to="/#">Blog</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title">
                                        <h3>Contact</h3>
                                    </div>

                                    <div className="footer-emailing">
                                        <ul>
                                            <li><i className="far fa-envelope"></i>info@mobileone.com</li>
                                            <li><i className="far fa-clone"></i>mobileone.com</li>
                                            <li><i className="far fa-flag"></i>POBox 1000, Kampala Uganda</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-25 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-copyright footer-copyright-3 text-center">
                                    <p className="white-color">Copyright by@ Moobile - 2022 &nbsp; | &nbsp; Powere by
                                        Autosoft</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

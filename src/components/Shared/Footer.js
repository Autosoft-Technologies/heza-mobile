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
                                        <Link to="/"><img src="img/logo/footer-logo-3.png" alt=""/></Link>
                                    </div>
                                    <div className="footer-contact-content mb-25">
                                        <p>In the era of all things linked cloud service, our products under adopt cloud
                                            communication technology with high reliability, high stability, low delay,
                                            strict security and privacy, and are distributed all over the world.</p>
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
                                            <li><Link to="/servicesDetails">Home</Link></li>
                                            <li><Link to="/servicesDetails">About us</Link></li>
                                            <li><Link to="/servicesDetails">Services</Link></li>
                                            <li><Link to="/doctors">Contact us</Link></li>
                                            <li><Link to="/servicesDetails">Appoinment</Link></li>
                                            <li><Link to="/blogs">News</Link></li>
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
                                            <li><i className="far fa-envelope"></i>info@examplemedical.com</li>
                                            <li><i className="far fa-clone"></i>examplemedical.com</li>
                                            <li><i className="far fa-flag"></i>227 Marion Street, Columbia</li>
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

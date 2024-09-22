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
                                    {/*<div className="footer-logo mb-35">*/}
                                    {/*    <Link to="/"><img src="img/logo/heza-mobile-footer.png" alt="Heza logo"/></Link>*/}
                                    {/*</div>*/}
                                    <div className="footer-contact-content mb-25">
                                        <p>
                                            Heza Mobile is a Communication Platform as a Service (CPaaS) that lets existing
                                            business software interact with and incentivize their customers using
                                            preferred APIs channels — like SMS, Airtime & Data, USSD, WhatsApp Business and Verification.
                                        </p>
                                        <div className="header-social-icons f-left d-none d-xl-block">
                                            <ul>
                                                <li><a target="_blank" href="https://twitter.com/HezaMobile"><i className="fab fa-twitter"></i></a></li>
                                                <li><a target="_blank" href="https://www.linkedin.com/company/heza-mobile/"><i className="fab fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
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
                                            <li><Link to="#">Developers</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
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

                                            <li>
                                                <div className="row align-items-center" style={{position: 'relative', zIndex: '9999'}}>
                                                    <div className="col-md-1"><i className="far fa-envelope"></i></div>
                                                    <div className="col-md-11">hello@hezamobile.com</div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="row align-items-center" style={{position: 'relative', zIndex: '9999'}}>
                                                    <div className="col-md-1"><i className="far fa-globe"></i></div>
                                                    <div className="col-md-11">www.hezamobile.com</div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="row align-items-center" style={{position: 'relative', zIndex: '9999'}}>
                                                    <div className="col-md-1"><i className="far fa-map"></i></div>
                                                    <div className="col-md-11">P.O Box 116783, Maria Plaza, Bombo
                                                        road, Kampala Uganda</div>
                                                </div>
                                            </li>


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
                                    <p className="white-color">Copyright &copy; {new Date().getFullYear()} Heza Mobile. All rights reserved
                                        &nbsp;| &nbsp; Powered
                                        by &nbsp;
                                        <a href="https://autosoftug.com/" target="_blank"
                                           className="white-color">Autosoft</a>
                                    </p>
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

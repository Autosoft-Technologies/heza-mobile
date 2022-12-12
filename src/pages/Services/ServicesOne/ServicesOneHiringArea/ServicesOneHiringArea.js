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

                                <h2>Airtime & Data</h2>
                                <p>
                                    Airtime platform that allows businesses to easily and securely buy and distribute
                                    airtime to their customers. This will enable businesses to reward their customers
                                    with discounts and special offers and our mobile data platform that allows
                                    businesses to purchase and distribute data packages to their customers. This will
                                    enable businesses to offer their customers discounts on data plans, as well as to
                                    provide access to their own applications and services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters hire-bg">
                        <div className="col-xl-6 col-lg-6">
                            <div className="hire-text mt-50">
                                <h2>WhatsApp Business </h2>
                                <p>Our WhatsApp Business solution is specifically designed to enable businesses to
                                    communicate more effectively with their customers. This powerful platform allows
                                    businesses to easily create and manage customer conversations, provide customer
                                    service, and create automated marketing campaigns
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
                                <p>Send automated messages to their customers. These messages can be used to promote
                                    special offers, alert customers to new products, or provide customer support.
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
                                <p className="flex justify-content-evenly">We provide a USSD platform that allows businesses to create a customized menu of
                                    services that are tailored to their customers’ needs. The platform will also allow
                                    customers to access a range of services such as balance enquiries, account
                                    information, bill payments, and product purchases.
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

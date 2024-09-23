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
                            <div className="about-right-side mb-30">
                                <div className="about-text mb-50">

                                    <p className="justify-content-evenly">We are a team of experts with extensive experience in the IT and
                                        telecommunications industries, driven by a passion for solving business
                                        communication challenges using existing technologies. We have a deep
                                        understanding of market needs, the limitations of current commercial solutions,
                                        and a clear vision for future advancements.</p>

                                    <p className="justify-content-center" style={{alignContent: 'justify'}}>Heza Mobile began as a messaging provider delivering tailored business solutions
                                        like SMS, USSD, and Topup. We have since expanded our offerings to include the
                                        integration of third-party OTT messaging platforms, such as RCS, WhatsApp, and
                                        Telegram, to enhance business communication.</p>

                                    <p className="justify-content-between">To address the limitations of business communications, we developed a
                                        next-generation Conversational API stack. This innovation enables more efficient
                                        market expansion for businesses and increases the total addressable market.</p>

                                    <p className="text-start">Today, we collaborate with a diverse range of startups, established financial
                                        institutions, insurance companies, and NGOs across Africa. Our solutions empower
                                        them to provide scalable, user-friendly, and effective omni-channel self-service
                                        options, delivering exceptional customer experiences while reducing operational
                                        costs.</p>

                                </div>
                            </div>
                        </div>

                        <div className="our-destination row pt-40">
                            <div className="col-md-6">
                                <div className="mv-icon f-left">
                                    <img src="img/about/destination-icon-1.png" alt=""/>
                                </div>
                                <div className="mv-title fix">
                                    <h3>Mission</h3>
                                    <p>To become the preferred communication solutions provider, empowering innovators to deliver exceptional service experiences to their customers.</p>
                                </div>
                            </div>
                            <div className="single-item mb-30 col-md-6 col-lg-6">
                                <div className="mv-icon f-left">
                                    <img src="img/about/destination-icon-2.png" alt=""/>
                                </div>
                                <div className="mv-title fix">
                                    <h3>Vision</h3>
                                    <p>To improve communication between businesses and their customers</p>
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

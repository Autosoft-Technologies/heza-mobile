import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';
import ContactMap from './ContactMap/ContactMap';
import {Helmet} from "react-helmet";

const Contact = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                {/*<title>My Home</title>*/}
                <meta data-react-helmet="true" name="title"
                      content="Contact us"/>
                <link rel="canonical" href="https://hezamobile.com/contact" />
            </Helmet>
            <HomeHeader/>
            <CommonPageHeader title="Contact Us" subtitle="Contact" />
            <ContactArea/>
            {/*<ContactFormArea/>*/}
            {/*<ContactMap/>*/}
            <Footer/>
        </>
    );
};

export default Contact;

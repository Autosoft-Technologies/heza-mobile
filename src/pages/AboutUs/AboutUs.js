import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import HomeOurTeam from '../Home/Home/HomeOurTeam/HomeOurTeam';
import AboutAnalysis from './AboutAnalysis/AboutAnalysis';
import AboutAppoinment from './AboutAppoinment/AboutAppoinment';
import AboutArea from './AboutArea/AboutArea';
import AboutCounter from './AboutCounter/AboutCounter';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial';
import {Helmet} from "react-helmet";

const AboutUs = () => {
   return (
      <>
          <Helmet>
              <meta charSet="utf-8" />
              <meta data-react-helmet="true" name="title"
                    content="Our story"/>
              <link rel="canonical" href="https://hezamobile.com/about" />
          </Helmet>
         <HomeHeader/>
         <CommonPageHeader title="Company" subtitle="About" />
         <AboutArea/>
         {/*<HomeFact/>*/}
         {/*<AboutTestimonial/>*/}
         <Footer/>
      </>
   );
};

export default AboutUs;

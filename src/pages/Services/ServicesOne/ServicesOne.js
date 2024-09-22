import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CalculateArea from './CalculateArea/CalculateArea';
import ServicesOneABout from './ServicesOneAbout/ServicesOneABout';
import ServicesOneHiringArea from './ServicesOneHiringArea/ServicesOneHiringArea';
import ServicesTwoAbout from "../ServicesTwo/ServicesTwoAbout/ServicesTwoAbout";
import {Helmet} from "react-helmet";

const ServicesOne = () => {
   return (
      <>
          <Helmet>
              <meta charSet="utf-8" />
              <meta data-react-helmet="true" name="title"
                    content="Solutions"/>
              <link rel="canonical" href="https://hezamobile.com/solutions" />
          </Helmet>
         <HomeHeader/>
         <CommonPageHeader title="Services" subtitle="Services" />
         {/*<ServicesOneABout/>*/}
          <ServicesTwoAbout/>
         {/*<CalculateArea/>*/}
         <ServicesOneHiringArea/>

         <Footer/>
      </>
   );
};

export default ServicesOne;

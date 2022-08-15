import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const HomeServices = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel home_ser_title">
                           {/*<h5>Services</h5>*/}
                           <h1>Services</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <HomeSIngleService icon="1" content={'Integrate SMS service within your business application for reach communication, Transactional, Verification and Authentications.\n' +
                  '                  '} title="SMS" />
                  <HomeSIngleService icon="5" content={'Make payments, do personalized surveys and data collection on all mobile phone devices.'} title="USSD" />
                  <HomeSIngleService icon="3" content={'Easily send airtime or data to mobile phone users as top-ups or as incentives.'} title="Airtime & Data" />
                  <HomeSIngleService icon="4" content={'Engage with your customers on the most popular chat app.'} title="WhatApp Business" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;

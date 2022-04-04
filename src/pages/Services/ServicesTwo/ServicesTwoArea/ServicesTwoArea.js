import React from 'react';
import { Link } from 'react-router-dom';
import ServicesTwoSingleItem from '../../../../components/ServicesTwoSingleItem/ServicesTwoSingleItem';

const ServicesTwoArea = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-12">
                     <div className="section-title pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Services</h5>
                           <h2>Our Services</h2>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <ServicesTwoSingleItem image="1" title="Body Surgery" />
                  <ServicesTwoSingleItem image="2" title="Neurology Sargery" />
                  <ServicesTwoSingleItem image="3" title="Blood Cancer" />
                  <ServicesTwoSingleItem image="4" title="Family Care" />
                  <ServicesTwoSingleItem image="5" title="Eye Care" />
                  <ServicesTwoSingleItem image="6" title="Allergic Issue" />

               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesTwoArea;

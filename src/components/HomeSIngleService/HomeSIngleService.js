import React from 'react';
import { Link } from 'react-router-dom';

const HomeSIngleService = ({ icon, content, title, border_class}) => {
   return (
      <>
         <div className="col-xl-3 col-lg-6 col-md-6">
            <div className={border_class ? `service-box ${border_class} text-center mb-30` : 'service-box text-justify mb-30'}>
               <div className="service-thumb">
                  <img src={`img/services/service${icon}.png`} alt=""/>
               </div>
               <div className="service-content">
                  <h3><Link to="#">{title}</Link></h3>
                  {/*justify*/}
                  <p className="">{content}</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSIngleService;

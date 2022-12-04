import React from 'react';
import { Link } from 'react-router-dom';

const HomeSIngleService = ({ icon, content, title}) => {
   return (
      <>
         <div className="col-xl-3 col-lg-6 col-md-6">
            <div className='service-box text-justify'>
               <div className="text-center">
                  <img src={`img/services/service${icon}.png`} alt=""/>
               </div>
               <div className="">
                  <h3 className="text-center"><Link to="#">{title}</Link></h3>
                  <p className="text-center">{content}</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSIngleService;

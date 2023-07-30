import React, { useContext, useEffect, useState } from 'react';
import useSticky from '../hooks/use-sticky';
import Sidebar from '../components/common/off-canvas';
import { AGCContext } from '@/app/context/AGCProvider';
import { navbarName } from '../../app/model/navbarName';

const MobileMenu = ({ logo, bg, transparent = true }: { logo: string; bg: string; transparent?: boolean }) => {
   const { headerSticky } = useSticky();
   const agcContext = useContext(AGCContext);
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [navbarData, setNavbarData] = useState([]);
   const [loading, setLoading] = useState(false);

   async function getSchoolName() {
      setLoading(true);
      setNavbarData(await agcContext.executeQuery(navbarName));
      setLoading(false);
   }
   useEffect(() => {
      getSchoolName();
   }, []);


   return (
      <React.Fragment>
         <div
            id="header-sticky-mobile"
            className={`tp-md-menu ${transparent ? 'header-transparent' : ''} d-lg-none ${bg ? bg : ''} ${
               headerSticky ? 'header-sticky' : ''
            }`}
         >
            <div className="container-fluid mt-3">
               <div className="grid grid-cols-12 ">
                  <div className="col-span-4 max-w-[200px]">
                     <img src="/assets/img/logo/logo-blue.png" alt="" />
                  </div>
                  <div className="col-span-7">
                     <div className="grid grid-cols-5">
                        <div className="col-span-4">
                           <div className="flex">
                              <div className="my-2 bg-[#ec373c] p-2 text-white rounded px-2 mx-3  ">
                                 <div className="text-lg sm:text-xl">
                                    {navbarData.map((navbar, key) => (
                                       <span key={key}>{navbar.schoolName}</span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="flex ">
                           <div className="bar text-left">
                              <button className="tp-menu-bar" onClick={() => setSidebarOpen(true)} type="button">
                                 <i className="fal fa-bars"></i>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* off canvas start */}
         <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
         {/* off canvas end */}
      </React.Fragment>
   );
};

export default MobileMenu;

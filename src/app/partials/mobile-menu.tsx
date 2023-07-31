import React, { useState } from 'react';
import useSticky from '../hooks/use-sticky';
import Sidebar from '../components/common/off-canvas';

const MobileMenu = ({ logo, bg, transparent = true }: { logo: string; bg: string; transparent?: boolean }) => {
   const { headerSticky } = useSticky();
   const [sidebarOpen, setSidebarOpen] = useState(false);
   return (
      <React.Fragment>
         <div
            id="header-sticky-mobile"
            className={`tp-md-menu ${transparent ? 'header-transparent' : ''} d-lg-none ${bg ? bg : ''} ${
               headerSticky ? 'header-sticky' : ''
            }`}
         >
            <div className="container-fluid mt-3 ">
               <div className="grid grid-cols-12 items-center">
                  <div className="col-span-3 max-w-[200px]">
                     <img src="/assets/img/logo/logo-blue.png" alt="" />
                  </div>
                  <div className="col-span-7">
                     <div className="flex     text-white ">
                        <div className="text-sm sm:text-lg bg-red-700  rounded mx-1 px-1  ">İSTANBUL BEYKENT</div>
                     </div>
                  </div>
                  <div className="col-span-2 ">
                     <div className="bar text-left">
                        <button className="tp-menu-bar" onClick={() => setSidebarOpen(true)} type="button">
                           <i className="fal fa-bars"></i>
                        </button>
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

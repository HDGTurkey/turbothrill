import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import useSticky from "../hooks/use-sticky";
import Sidebar from "../components/common/off-canvas";
import NavMenus from "./nav-menus";
import MobileMenu from "./mobile-menu";

import { AGCContext } from "@/app/context/AGCProvider";
import { university } from "../model/university";

const Header = () => {
  const agcContext = useContext(AGCContext);
  const [logoData, setLogoData] = useState<
    { name: string; logo: string; city: string } | undefined
  >(undefined);
  const [loading, setLoading] = useState(false);

  async function getLogo() {
    setLoading(true);
    const data = await agcContext.executeQuery(university);
    setLogoData(data[0]);
    setLoading(false);
  }
  useEffect(() => {
    getLogo();
  }, []);

  const { headerSticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area header-transparent pl-165 pr-165 pt-15 
        ${headerSticky ? "header-sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-3">
                <div className="tp-logo flex ">
                  <Link href="/">
                    <img
                      src="/assets/img/logo/logo-blue.png"
                      alt=""
                      width="30"
                    />
                  </Link>
                  <span className=" ml-3 mt-1.5 cursor-pointer text-[30px] font-extrabold  text-black ">
                    <div>
                      {loading ? (
                        <div>Loading...</div>
                      ) : (
                        <div className="rounded-md bg-[#ec373c] px-1.5 font-DMSans font-normal text-[24px] my-auto uppercase text-white">
                          {logoData?.name}
                        </div>
                      )}
                    </div>
                  </span>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-main-menu">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-0 col-lg-2">
                <div
                  className="tp-menu-bar block text-end md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <button>
                    <i className="fal fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logo-blue.png"} bg={""} />
      {/* <!-- mobile-menu-area-end --> */}

      {/* off canvas start */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      {/* off canvas end */}
    </React.Fragment>
  );
};

export default Header;

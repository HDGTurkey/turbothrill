import React from 'react'
import Link from 'next/link'
import useSticky from '../hooks/use-sticky'
import Sidebar from '../Components/common/off-canvas'
import NavMenus from './nav-menus'
import MobileMenu from './mobile-menu'

const Header = () => {
  const { headerSticky } = useSticky()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area header-transparent pl-165 pr-165 pt-15 
        ${headerSticky ? 'header-sticky' : ''}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-logo">
                  <Link href="/">
                    <img src="/assets/img/logo/logo-blue.png" alt="" />
                  </Link>
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
              <div className="col-xl-2 col-lg-2">
                <div
                  className="tp-menu-bar text-end block md:hidden"
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
      <MobileMenu logo={'logo-blue.png'} bg={''} />
      {/* <!-- mobile-menu-area-end --> */}

      {/* off canvas start */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      {/* off canvas end */}
    </React.Fragment>
  )
}

export default Header

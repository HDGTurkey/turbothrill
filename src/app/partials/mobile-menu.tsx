import React, { useState } from 'react'
import useSticky from '../hooks/use-sticky'
import Sidebar from '../Components/common/off-canvas'

const MobileMenu = ({
  logo,
  bg,
  transparent = true,
}: {
  logo: string
  bg: string
  transparent?: boolean
}) => {
  const { headerSticky } = useSticky()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <React.Fragment>
      <div
        id="header-sticky-mobile"
        className={`tp-md-menu ${
          transparent ? 'header-transparent' : ''
        } d-lg-none  
    ${bg ? bg : ''} ${headerSticky ? 'header-sticky' : ''}`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-8">
              <div className="my-5 mx-3 tp-logo">
                <img src="/assets/img/logo/logo-blue.png" alt="" />
              </div>
            </div>
            <div className="col-4">
              <div className="bar text-end">
                <button
                  className="tp-menu-bar"
                  onClick={() => setSidebarOpen(true)}
                  type="button"
                >
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
  )
}

export default MobileMenu

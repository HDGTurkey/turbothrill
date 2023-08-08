import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import services_data from "../../app/data/committe/services-data";

const services_items = services_data.filter((ser) => ser.service_p);

const ServiceArea = () => {
  const [active, setActive] = useState(0); // active state variable with initial value 0
  const activeCardRef = useRef<HTMLDivElement | null>(null); // Ref to the active card element

  const handleServiceItemClick = (itemId: number) => {
    setActive(itemId); // Update the active state with the id of the clicked service item
  };

  useEffect(() => {
    // Scroll to the active card when it is set
    if (activeCardRef.current) {
      activeCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [active]);

  const getActiveServiceItem = () => {
    if (active !== 0) {
      const activeService = services_items.find(
        (service) => service.id === active,
      );
      if (activeService) {
        const { delay, duration, id, img, title, border_effect } =
          activeService;
        return (
          <div
            key={id}
            className={`col-xl-3 col-lg-4 col-md-6 wow tpfadeUp active-item`}
            data-wow-duration={duration}
            data-wow-delay={delay}
            ref={activeCardRef} // Set the ref to the active card element
          >
            <div className={`tp-sv-border-effect ${border_effect}`}>
              <div className={`tp-service-item-four sv-1-border`}>
                <div className="tp-service-item-four__img mb-40">
                  {/* Render the image if available */}
                </div>
                <div className="tp-service-item-four__title">
                  <h3 className="tp-sv-sm-title">{title}</h3>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <>
      <div className="tp-service-area pb-130">
        <div className="container">
          <div className="row">
            {services_items.map((service, i) => {
              const { delay, duration, id, img, title, border_effect } =
                service;
              return (
                <div
                  key={id}
                  onClick={() => handleServiceItemClick(id)} // Pass the id as a parameter to handleServiceItemClick
                  className={`col-xl-3 col-lg-4 col-md-6 wow tpfadeUp ${
                    active === id ? "active" : ""
                  }`}
                  data-wow-duration={duration}
                  data-wow-delay={delay}
                >
                  <div className={`tp-sv-border-effect ${border_effect}`}>
                    <div
                      className={`tp-service-item-four sv-1-border ${
                        i + 1 === 8 ? "sv-color-1" : `sv-color-${i + 1}`
                      } mb-30`}
                    >
                      <div className="tp-service-item-four__img  mb-40"></div>
                      <div className="tp-service-item-four__title">
                        <h3 className="tp-sv-sm-title">
                          <a>{title}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {getActiveServiceItem()}
    </>
  );
};

export default ServiceArea;

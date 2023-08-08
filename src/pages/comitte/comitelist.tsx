import Link from 'next/link';
import React, { useState } from 'react';
import services_data from '../../app/data/committe/services-data';

const services_items = services_data.filter(ser => ser.service_p);

const ServiceArea = () => {
  const [active, setActive] = useState(0);

  const handleServiceItemClick = (itemId: any) => {
    console.log(itemId);

    setActive(itemId);
  };

  const getActiveServiceItem = () => {
    if (active !== 0) {
      const activeService = services_items.find(service => service.id === active);
      if (activeService) {
        const { delay, duration, id, img, title, border_effect, text_1 } = activeService;
        return (
          <div key={id} className={` wow tpfadeUp active-item`} data-wow-duration={duration} data-wow-delay={delay}>
            <div className={`tp-sv-border-effect ${border_effect}`}>
              <div className={`tp-service-item-four sv-1-border`}>
                <div className="tp-service-item-four__img mb-40">


                </div>
                <div className="tp-service-item-four__title">
                  <h3 className="tp-sv-sm-title">
                    {title}
                  </h3>
                  <div>
                    {text_1}
                  </div>
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
              const { delay, duration, id, img, title, border_effect } = service;
              return (
                <div
                  key={id}
                  onClick={() => handleServiceItemClick(id)}
                  className={`col-xl-3 col-lg-4 col-md-6 wow tpfadeUp ${active === id ? 'active' : ''}`}
                  data-wow-duration={duration}
                  data-wow-delay={delay}
                >
                  <div className={`tp-sv-border-effect ${border_effect}`}>
                    <div
                      className={`tp-service-item-four sv-1-border ${i + 1 === 8 ? 'sv-color-1' : `sv-color-${i + 1}`
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
            {getActiveServiceItem()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;

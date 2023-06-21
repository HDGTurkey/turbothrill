import Link from 'next/link';
import React from 'react';

interface BreadcrumbProps {
          title: string;
          back_home?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, back_home = false }) => {

          return (
                    <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative "
                              style={{ backgroundImage: 'url(/assets/img/breadcrum/ab-1.1.jpg)' }}>
                              <div className="ac-about-shape-img z-index-1">
                                        <img src="/assets/img/breadcrum/ab-shape-1.1.jpg" alt="" />
                              </div>
                              <div className="container">
                                        <div className="row">
                                                  <div className="col-xxl-12">
                                                            <div className="breadcrumb__content p-relative z-index-1">
                                                                      <h3 className="breadcrumb__title">{title}</h3>
                                                                      
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
};

export default Breadcrumb;
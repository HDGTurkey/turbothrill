import Link from 'next/link';
import React from 'react';

interface FeatureItemProps {
          title: string;
          subtitle: string;
          color?: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, subtitle, color }) => {
          return (
                    <div className="col-xl-3 col-lg-3 col-md-6">
                              <div className='acfeature mb-50'>
                                        <div className={`ac-circle ${color ? `ac-cirle-color-${color}` : ''}`}></div>
                                        <div className="acfeature__item">
                                                  <h3 className="ac-feature-sm-title">
                                                            <Link href="/about-me">
                                                                      {title}
                                                            </Link>
                                                  </h3>
                                                  <p>{subtitle}</p>
                                        </div>
                              </div>
                    </div>
          )
}

const contents = {
          title: 'Creating world class experiences',
          sm_desc_1: "Collax builds digital products that let people do things differently. Share your challenge with our team, and we’ll work with you to deliver a revolutionary digital product. Our clients have changed the way people do banking, listen to music.",
          sm_desc_2: "learn languages, and rent bikes. Their products have been featured in TechCrunch, Business Insider, and Product Hunt"
}
const { title, sm_desc_1, sm_desc_2 } = contents;

const FeatureArea = () => {
          return (
                    <>
                              <div className="ac-feature-area">
                                        <div className="container">
                                                  <div className="row ac-feature-space">
                                                            <div className="col-xl-6 col-lg-6">
                                                                      <div className="ac-feature-left">
                                                                                <h3 className="ac-feature-title">{title}</h3>
                                                                      </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6">
                                                                      <div className="ac-feature-right">
                                                                                <p className="pb-25">{sm_desc_1}</p>
                                                                                <p>{sm_desc_2}</p>
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  <div className="ac-feature-border-top">
                                                            <div className="row">
                                                                      <FeatureItem title={'Project kikoff'}
                                                                                subtitle={'At collax we specialize designing building, shipping...'} />
                                                                      <FeatureItem title={'PIdeation'} color={'2'}
                                                                                subtitle={'At collax we specialize designing building, shipping...'} />
                                                                      <FeatureItem title={'Design Process'} color={'3'}
                                                                                subtitle={'At collax we specialize designing building, shipping...'} />
                                                                      <FeatureItem title={'Development'} color={'4'}
                                                                                subtitle={'At collax we specialize designing building, shipping...'} />
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </>
          );
};

export default FeatureArea;
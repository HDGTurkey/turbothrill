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
                                                            <div className='mx-2'>
                                                                      {title}
                                                            </div>
                                                  </h3>
                                                  <p>{subtitle}</p>
                                        </div>
                              </div>
                    </div>
          )
}

const contents = {
          title: 'The Process of Being an Ambassador',
          sm_desc_1: "The Huawei Student Ambassador program is a global program that aims to create a group of student leaders enthusiastic about technology and innovation and willing to share their experiences with their peers. The program is designed to help students develop their professional and personal skills, learn about the latest technologies, and build a better community.",
          sm_desc_2: ""
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
                                                            <div className="row ">
                                                                      <FeatureItem title={'Application'} 
                                                                                subtitle={''}  />
                                                                      <FeatureItem title={'Interview with National Project Managers'}
                                                                                subtitle={''} />
                                                                      <FeatureItem  title={'Interview with Global Project Managers'} 
                                                                                subtitle={''} />
                                                                      <FeatureItem title={'Certificate'} 
                                                                                subtitle={''} />
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </>
          );
};

export default FeatureArea;
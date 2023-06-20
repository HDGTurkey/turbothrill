import Link from 'next/link';
import React from 'react';
import SingleServiceTwo from './single-service-2';
import { Bulb, Code, Managed } from "../assets/img/svg";

const services_data = [
  {
    id:1,
    duration:'.5s',
    delay:'.8s',
    img:'/assets/img/service/service-1.png',
    title:'Talks',
    text_1:'Get updated with the latest news and announcements',
    text_2:'',
    home:true,
    service_p_2:true,
  },
  {
    id:1,
    duration:'.5s',
    delay:'.8s',
    img:'/assets/img/service/service-7.png',
    title:'Codelabs',
    text_1:'Start working together by contacting our university ambassadors',
    home:true,
    service_p_2:true,
  },
  {
    id:1,
    duration:'.5s',
    delay:'.8s',
    img:'/assets/img/service/service-3.png',
    title:'Campus Roadshows',
    text_1:'Share knowledge in different Companies, colleges and universities',
    home:true,
    service_p_2:true,
  },
  
]


const services_contents = {
  shape_img: '/assets/img/service/service-shape.png',
  subtitle: 'What We Do?',
  title: 'Huawei Student Developers ',
  
}

const { shape_img, title, subtitle, btn_text } = services_contents;
const services_items = services_data.filter(ser => ser.home);

const ServicesArea = () => {
  return (
    <div className="tp-service-area pt-190 pb-100 grey-bg p-relative fix">
      <div className="tp-sv-shape-img z-index-1">
        <img src={shape_img} alt="" />
      </div>
      <div className="circle-animation service">
        <span className="tp-circle-1"></span>
        <span className="tp-circle-2"></span>
      </div>
      <div className="circle-animation service-two">
        <span className="tp-circle-skye"></span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="tp-service-section-box mb-30 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
              <h5 className="tp-subtitle pb-10">{subtitle}</h5>
              <h2 className="tp-title">{title}</h2>
              <Link href="/service-1">
                {btn_text}
              </Link>
            </div>
          </div>
          {services_items.map((s, i) => (
            <SingleServiceTwo key={i} service={s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
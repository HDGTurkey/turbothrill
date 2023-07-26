import Link from "next/link";
import React from "react";
import SingleServiceTwo from "./single-service-2";

const services_data = [
  {
    id: 1,
    duration: ".5s",
    delay: ".8s",
    img: "/assets/img/service/service-1.png",
    title: "Connection",
    text_1:
      "Meet student developers with a similar passion for technology, exchange ideas, and collaborate on new projects.",
    text_2: "",
    home: true,
    service_p_2: true,
  },
  {
    id: 1,
    duration: ".5s",
    delay: ".8s",
    img: "/assets/img/service/service-7.png",
    title: "Learning",
    text_1:
      "Acquire new skills and knowledge on a wide range of technical topics through engaging technical workshops, summits and training sessions.",
    home: true,
    service_p_2: true,
  },
  {
    id: 1,
    duration: ".5s",
    delay: ".8s",
    img: "/assets/img/service/service-3.png",
    title: "Growth",
    text_1:
      "Continuously improve your technical skills by partnering with accomplished developers, to fast-track your career.",
    home: true,
    service_p_2: true,
  },
];

const services_contents = {
  shape_img: "/assets/img/service/service-shape.png",
  subtitle: "",
  title: "What awaits you?",
};

const { shape_img, title, subtitle } = services_contents;
const services_items = services_data.filter((ser) => ser.home);

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
            <div
              className="tp-service-section-box mb-30 wow tpfadeUp"
              data-wow-duration=".3s"
              data-wow-delay=".6s"
            >
              <h5 className="tp-subtitle pb-10">{subtitle}</h5>
              <h2 className="tp-title">{title}</h2>
              <Link href="/service-1"></Link>
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

import Link from "next/link";
import React from "react";
// HSD is open to student developers from around the world. Feel free to contact us if you have any questions.

const CtaTwo = () => {
  return (
    <div
      className="tp-news-letter-area tp-news-letter-bg pt-35 pb-30"
      style={{ backgroundImage: "url(/assets/img/news/news-bg.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-12 ">
            <div className="tp-news-sub-wrapper pr-50">
              <div className="tp-news-letter-section-box">
                <h2
                  className="tp-title-sm tp-title-sm tp-white-text pb-25 wow tpfadeUp"
                  data-wow-duration=".5s"
                  data-wow-delay=".8s"
                >
                  We look forward to hearing from you
                </h2>
              </div>
              <p className="py-3 text-white">
                HSD is open to student developers from around the world. Feel
                free to contact us if you have any questions.
              </p>
              <div
                className="tp-news-button wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay="1s"
              >
                <a href="https://www.instagram.com/hsdturkiye" className="tp-btn-sky">
                  Join Us
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-5 col-md-12 wow tpfadeRight"
            data-wow-duration=".5s"
            data-wow-delay=".8s"
          >
            <div className="tp-news-letter-img text-md-start text-lg-end pr-45">
              <img src="/assets/img/news/news-7.1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaTwo;

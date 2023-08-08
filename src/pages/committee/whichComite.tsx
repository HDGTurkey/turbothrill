import Link from 'next/link';
import React from 'react';

const newsLatter_contents = {
  img: '/assets/img/news/news-2.png',
  subtitle: 'Need a Project ?',
  title: "Which committee should I choose?",
  btn_text: 'Fixed a Meeting',
  bg_img: '/assets/img/news/shape-3.png',
}
const { bg_img, btn_text, img, subtitle, title } = newsLatter_contents;

const NewsLetter = () => {
  return (
    <>
      <div className="tp-news-area black-bg fix">
        <div className="container">
          <div className="row align-items-end flex-wrap-reverse flex-md-wrap">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-newsletter-left-img pt-10 p-relative wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="z-index"> <img src={img} alt="" /></div>
                <div className="news-shape-img">
                  <img src="/assets/img/creative/creative-circle-img.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-news-letter-section-box-two pt-135 pb-145 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                <h2 className="tp-title tp-white-text pb-10">{title}</h2>
                <Link href="/test">
                <div className="post__button">
          <a className="tp-btn-border text-white" >
            {" "}
            Let's learn together
          </a>
        </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default NewsLetter;
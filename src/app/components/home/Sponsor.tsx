import Link from "next/link";
import React from "react";

const newsLatter_contents = {
  img: "/assets/img/news/news-2.png",
  subtitle: "Need a Project ?",
  title: "Let's work together. fixed a meeting",
  btn_text: "Fixed a Meeting",
  bg_img: "/assets/img/news/shape-3.png",
};
const { bg_img, btn_text, img, subtitle, title } = newsLatter_contents;

const Sponsor = () => {
  return (
    <>
      <div className="tp-news-letter-area">
        <div
          className="tp-suscribe-newslatter theme-bg pb-40 pt-40"
          style={{
            backgroundImage: `url(${bg_img})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="">
                <div className="tp-newsletter-title ">
                  <h3 className="tp-news-title">
                    Thanks to all our supporters and partners!
                  </h3>
                  <p className="pt-5 text-white">
                    Our contact e-mail for partnership: hsdbeykeynt@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsor;

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
                    <Link href="/test">

                      <button
                        type="button"
                        className="hover:bg-[#cc2e32 inline-flex items-center rounded-md  bg-[#ec373c] px-5 py-2.5 mt-10 text-center text-sm font-medium text-white"
                      >
                        Test Link
                        <svg
                          aria-hidden="true"
                          className="-mr-1 ml-2 h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </Link>

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

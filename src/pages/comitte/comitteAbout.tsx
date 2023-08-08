import React from "react";

const contents = {
  title: "The purpose of HSD Committees?",
  right_text_1:
    "The committees aim for our volunteers to take more responsibility and risk, take a more active role in the program, and move the community further in line with their abilities.",
  right_text_2: "",
  desc: "Youtube Kanalımız",
  about_img: "/assets/img/breadcrum/ab-1.2.jpg",
};
const { about_img, desc, right_text_1, right_text_2, title } = contents;

const CommitteAbout = () => {
  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className=" ">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 wow tpfadeLeft"
                data-wow-duration=".3s"
                data-wow-delay=".5s"
              >
                <div className="ac-about-left">
                  <h3 className="ac-ab-title">
                    <a href="#">{title}</a>
                  </h3>
                  <div className="shadow-sm">
                    <div className="text-md">
                      komubiteye katılmak ister misin? O zaman uygunluk testi
                      çözerek başlayabilirsin.
                    </div>
                    <div className="flex items-center justify-center p-3 text-center text-lg">
                      Sınav Gir
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl- col-lg-6 wow tpfadeRight"
                data-wow-duration=".5s"
                data-wow-delay=".7s"
              >
                <div className="ac-about-right">
                  <p className="">{right_text_1}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ac-testimonial-space">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommitteAbout;

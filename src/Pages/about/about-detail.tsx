import React from 'react';

const contents = {
  title:'Huawei Student Developers',
  video_title:'See Our Video',
  video_id:'8D6b3McyhhU',
  right_text_1:"HUAWEI Student Developers (HSD) is a global program for college and university students who share a passion for pioneering technologies. All undergraduate and postgraduate students with an interest in growing as developers are welcome to apply.",
  right_text_2:"HSD offers students an opportunity to expand their scope of knowledge in a dynamic peer-to-peer learning environment, through enriching training courses and activities.",
  about_img:'/assets/img/breadcrum/ab-1.2.jpg',
}
const {about_img,right_text_1,right_text_2,title,video_id,video_title} = contents;

function redirectToURL() {
          const url = 'https://www.youtube.com/watch?v=oau5llTtxWM'; 
          window.open(url, '_blank');
}

const AboutDetail = () => {
  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="ac-about-left">
                  <h3 className="ac-ab-title"><a href="#">{title}</a></h3>
                  <div className="ac-play-button">
                    <button  className="popup-video" onClick={redirectToURL} >
                      <i className="far fa-play">
                              </i></button>
                    <span>{video_title}</span>
                  </div>
                </div>
              </div>
              <div className="col-xl- col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                <div className="ac-about-right">
                  <p className="pb-25">{right_text_1}</p>
                  <p>{right_text_2}</p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>

     
    </>
  );
};

export default AboutDetail;
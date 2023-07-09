import React from 'react'

const contents = {
	title: 'Huawei Student Developers',
	right_text_1:
		'HUAWEI Öğrenci Geliştiricileri (HSD), öncü teknolojilere tutku duyan kolej ve üniversite öğrencilerine yönelik küresel bir programdır. Geliştirici olarak büyümeye ilgi duyan tüm lisans ve lisansüstü öğrenciler başvurabilirler. ',
	right_text_2:
		'HSD, zenginleştirici eğitim kursları ve etkinlikleri aracılığıyla öğrencilere dinamik bir eşler arası öğrenme ortamında bilgi kapsamlarını genişletme fırsatı sunar.',
	desc: 'Youtube Kanalımız',
	about_img: '/assets/img/breadcrum/ab-1.2.jpg',
}
const { about_img, desc, right_text_1, right_text_2, title } = contents

const AboutArea = () => {
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
									<div className="ac-play-button"></div>
								</div>
							</div>
							<div
								className="col-xl- col-lg-6 wow tpfadeRight"
								data-wow-duration=".5s"
								data-wow-delay=".7s"
							>
								<div className="ac-about-right">
									<p className="pb-25">{right_text_1}</p>
									<p>{right_text_2}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row ac-testimonial-space">
						<div
							className="col-xl-6 col-lg-6 wow tpfadeLeft"
							data-wow-duration=".3s"
							data-wow-delay=".5s"
						>
							<div className="ac-testimonial-info">
								<div className="actestimonial">
									<div className="actestimonial__icon"></div>
									<div className="actestimonial__position">
										<h4 className="ac-client-name">
											<a href="#"></a>
										</h4>
										{/* <span></span> */}
									</div>
									{/* <div className="actestimonial__paragraph">
                    <p> <span><i className="fas fa-quote-right"></i></span>{desc}</p>
                  </div> */}
								</div>
							</div>
						</div>
						{/* <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="ac-testimonial-right">
                <img src={about_img} alt="" />
              </div>
            </div> */}
					</div>
				</div>
			</div>

			{/* video modal start */}
			{/* <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} /> */}
			{/* video modal end */}
		</>
	)
}

export default AboutArea

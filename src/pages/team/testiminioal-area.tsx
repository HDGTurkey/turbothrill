import React from "react";

const testimonial_data = [
  {
    desc: "I had the chance to experience leadership and developed my leadership skills by fulfilling my responsibilities as the head of the community. Tasks such as planning community activities, managing projects, and maintaining effective communication among members helped me mature my leadership competencies.",
    user: "/assets/img/team/elif-emre.png",
    name: "Elif Emre",
    title: "Ambassador",
    delay: ".3s",
  },
  {
    desc: `We have improved our leadership and organizational skills in the organization and management of events. I think that I have strengthened my belief in teamwork and this skill. Working collaboratively with my team members, we benefited from different perspectives and achieved more effective results by using each other's strengths.`,
    user: "/assets/img/team/yakup-sarı.png",
    name: "Yakup Sarı",
    title: "Social Media Ambassador ",
    delay: ".5s",
  },
  {
    desc: "It has been a great success for me to develop my event management skills, to organize successful events by giving importance to time management and using resources effectively. Planning each event in detail and taking responsibility at every stage strengthened my leadership skills.",
    user: "/assets/img/team/yusuf-dur.png",
    name: "Yusuf Dur",
    title: "Event Organizer",
    delay: ".7s",
  },
];

const TestimonialArea = () => {
  return (
    <>
      <div className="tp-testimonial-area pt-130 pb-130 p-relative">
        <div className="container">
          <div className="tp-testimonial-title-box mb-3 ">
            <h5 className="tp-subtitle">Experience</h5>
            <h2 className="tp-title-sm">
              Check What
              <span className="tp-section-highlight ml-5">
                Team Say
                <svg
                  width="212"
                  height="11"
                  viewBox="0 0 212 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L212 11H0V0Z" fill="#FFDC60" />
                </svg>
              </span>
            </h2>
          </div>
          <div className="row ">
            {testimonial_data.map((item, i) => {
              const { delay, desc, name, title, user } = item;
              return (
                <div
                  key={i}
                  className="col-xl-12 wow tpfadeUp"
                  data-wow-duration="1s"
                  data-wow-delay={delay}
                >
                  <div className="tp-testimonial-item-four testimonial-html-space mb-30">
                    <div className="tp-testimonial-item-four__meta d-flex justify-content-between align-items-center"></div>
                    <div className="tp-testi-paragraph pb-40">
                      <p>{desc}</p>
                    </div>
                    <div className="tp-testimonial-item-four__client d-flex align-items-center">
                      <div className="mr-10 ">
                        <img src={user} alt="" className="w-16 rounded-full" />
                      </div>
                      <div className="tp-testimonial-item-four__position">
                        <h4 className="m-0">{name}</h4>
                        <span>{title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialArea;

import React, { useState, useEffect } from "react";
import Breadcrumb from "@/app/components/breadcrumb";
import { Link } from "react-router-dom";
const accordion_items = [
  {
    id: "one",
    show: true,
    title:
      "Do you enjoy using social media platforms effectively?",
    desc: "Yes, I am interested in content sharing and interaction.",
    descNo: "No, social media platforms are not that important to me.",
  },
  {
    id: "two",
    show: true,
    title: "Would you like to increase interaction and organize events among the members of the community?",
    desc: "Yes, I like to get people together and plan events.",
    descNo: "No, it's not ideal for me to organize events and manage community interactions.",
  },
  {
    id: "three",
    show: true,
    title: "Do you enjoy organizing cultural events , excursions or entertainment organizations ?",
    desc: "Yes, I like to have fun by bringing people together with different activities.",
    descNo: "No, I'm not interested.",
  },
  {
    id: "four",
    show: true,
    title: "Are you interested in technology and technical events?",
    desc: "Yes, I like technical issues.",
    descNo: "No, technical issues are not my area of interest.",
  },
  {
    id: "five",
    show: true,
    title: "Are you interested in career development issues?",
    desc: "Yes, I like to help people and organize seminars on these issues.",
    descNo: "No, career development issues are not my area of interest.",
  },
  {
    id: "six",
    show: true,
    title: "Do you enjoy writing , creating or editing content ?",
    desc: "Yes, one of my talents.",
    descNo: "No, it's not in my area of interest.",
  },
  {
    id: "seven",
    show: true,
    title: "Do you like to moderate on internet platforms or chat applications?",
    desc: "Yes, it's OK for me to edit and moderate community interaction.",
    descNo: "No, it's not appropriate for me to edit and moderate community interaction.",
  },
  {
    id: "eight",
    show: true,
    title: "Do you enjoy participating in social responsibility projects?",
    desc: "Yes, I am interested in participating and helping in projects that benefit society.",
    descNo: "No, I am not interested in social responsibility projects.",
  },
];

const questions = [
  "Do you enjoy using social media platforms effectively?",
  "Soru 2",
  "Soru 3",
  "Soru 4",
  "Soru 5",
  "Soru 6",
  "Soru 7",
  "Soru 8",
];

const news_letter_contents = {
  bg_img: '',
  subtitle: 'Get update',
  title: 'Get latest updates and deals',
  btn_text: 'Subscribe',
  news_l_img: '/assets/img/news/news-1.png',
  shape_img: ''
}

function finishTestScroll() {

  window.scrollTo(400, document.documentElement.scrollHeight);
}

const { bg_img, btn_text, news_l_img, shape_img, subtitle, title } = news_letter_contents;

const Test: React.FC = () => {
  const [answers, setAnswers] = useState<Array<string | null>>(
    Array(accordion_items.length).fill(null),
  );
  const [scrollToQuestion, setScrollToQuestion] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);

    if (index < accordion_items.length - 1) {
      setScrollToQuestion(index + 1);
    }
  };

  const totalYesCount = answers.filter((answer) => answer === "yes").length;

  const finishTest = () => {
    setShowResult(true);
    finishTestScroll();
  };

  const getResultMessage = () => {
    if (totalYesCount > accordion_items.length / 2) {
      return "Social Media Committee or Engagement Committee may be a good fit for you 😎";
    } else if (totalYesCount === accordion_items.length / 2) {
      return "Social Life Committee, Technical Activity Committee or Content/Editorial Committee may be considered for you 😎";
    }
    else {
      return `The Career Development Committee, Discord Committee, or Social Responsibility Committee may be more suited to your abilities 😎`;
    }
  };

  useEffect(() => {
    if (showResult && typeof window !== "undefined") {
      const resultElement = document.getElementById("test-result");
      if (resultElement) {
        resultElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [showResult]);

  return (
    <>
      <Breadcrumb title={"Test Time"} />
      <div className="container pt-16 ">
        <div className="row">
          <div className="team-section-box pb-25 text-center ">
            <h2 className="tp-title text-black">
              Which committee
              <span className="tp-section-highlight ml-3">
                should I choose?
                <svg
                  width="141"
                  height="11"
                  viewBox="0 0 141 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L141 11H0V0Z" fill="#FFDC60" />
                </svg>
              </span>
            </h2>
          </div>
          {accordion_items.map((item, index) => {
            const { id, show, title, desc, descNo } = item;
            return (
              <div key={index} className="card w-full rounded-md shadow-  p-6">
                <p className="text-black text-xl">{title}</p>
                <div className="grid sm:grid-cols-2 gap-2 p-5">
                  <label className="flex p-3 block w-[%50] bg-white rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <input type="radio" name={`question-${index}`} value="yes" checked={answers[index] === "yes"} onChange={() => handleAnswerChange(index, "yes")} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-in-form" />
                    <span className="text-sm text-gray-700 ml-3 ">{desc}</span>
                  </label>

                  <label className="flex p-3 block w-full bg-white rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <input type="radio" name={`question-${index}`} value="no" checked={answers[index] === "no"} onChange={() => handleAnswerChange(index, "no")} className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-checked-in-form" />
                    <span className="text-sm text-gray-700 ml-3 ">{descNo}</span>
                  </label>
                </div>


              </div>
            );
          })}

          {typeof showResult === "undefined" || showResult === false ? (
            <div className="post__button">
              <button onClick={finishTest} className="tp-btn-yellow my-5 text-white">
                Finish Test
              </button>
            </div>
          ) : null}

          {showResult && (
            // <div
            //   id="test-result"
            //   className="mt-4 text-xl font-semibold text-[#EB373C] "
            // >
            //   {getResultMessage()}
            // </div>
            <div className="tp-news-letter-area pt-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".4s">
              <div className="container">
                <div className="tp-news-letter-box p-relative" style={{ backgroundImage: `url(${bg_img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: 'contain' }} >
                  <div className="row">
                    <div className="  ">
                      <div className="tp-news-wrapper  z-index-1">
                        <div className="tp-news-letter-section-box">
                          <h2 className="tp-title text-black">{getResultMessage()}</h2>
                        </div>
                        <div className="post__button">
                          <a className="tp-btn-border text-black" >
                            {" "}
                            Join the Committee
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Test;